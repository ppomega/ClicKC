import { useNavigate } from "react-router-dom";

function SearchOp(props) {
  const navigate = useNavigate();
  return (
    <div
      className=" w-64 py-2  bg-white rounded-md border-b-2 border-black font-dmbold px-2"
      onClick={() => {
        props.se(false);
        navigate("/product", { state: props.da });
      }}
    >
      {props.da?.name}
    </div>
  );
}
export default SearchOp;
