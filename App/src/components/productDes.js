import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";
function ProdDesc(props) {
  const location = useLocation();
  const navi = useNavigate();
  const item = location.state;
  const path = "./images" + "/" + item?.category + "/" + item?.name + ".jpg";
  const name = "Add to Cart";
  const name1 = "Buy Now";
  return (
    <>
      <Nav
        fn={props.fn}
        n={props.n}
        data={props.data}
        setter={props.setter}
      ></Nav>
      <div className="w-3/4 flex flex-row">
        <div className="h-full w-1/2">
          <img className="w-3/4 " src={path}></img>
        </div>
        <div
          className="font-integral 
         text-2xl flex flex-col justify-around "
        >
          <h1>name:{item?.name}</h1>
          <h1>Category:{item?.category}</h1>
          <h1>price:{item?.price}</h1>
          <h2 className="text-xl max-w-xl">description:{item?.description}</h2>
          <div className="flex justify-between">
            <button
              className="rounded-md px-3 py-2 bg-black text-white text-lg font-integral"
              onClick={async (e) => {
                if (e && e.stopPropagation) e.stopPropagation();
                await props.c(item);
                await props.pricea(item.price);

                navi("/cart");
              }}
            >
              {name1}
            </button>
            <button
              className="rounded-md px-3 py-2 bg-black text-white text-lg font-integral"
              onClick={async (e) => {
                if (e && e.stopPropagation) e.stopPropagation();
                props.c(item);
                props.pricea(item.price);
              }}
            >
              {name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdDesc;
