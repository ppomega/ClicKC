import { useNavigate } from "react-router-dom";

function Button(props) {
  const navi = useNavigate();
  return (
    <button
      onClick={async (e) => {
        if (props.name == "Add to cart") {
          if (e && e.stopPropagation) e.stopPropagation();
          props.fn(props.item);
          props.price(props.item.price);
        } else {
          console.log(9);
          if (e && e.stopPropagation) e.stopPropagation();
          await props.fn(props.item);
          await props.price(props.item.price);
          navi("/cart");
        }
      }}
      className="rounded-md px-3 py-1 bg-black text-white text-sm font-integral"
    >
      {props.name}
    </button>
  );
}

export default Button;
