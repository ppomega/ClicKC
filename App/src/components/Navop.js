import { useState } from "react";
import Submenu from "./SubMenu";
import { useNavigate } from "react-router-dom";

function Navop(props) {
  const navi = useNavigate();
  const [setter, setYou] = useState(false);

  /*onMouseEnter={()=>{ setYou(true); props.fn(true);}} onMouseLeave={()=>{ setYou(false); props.fn(false);}} */
  return (
    <div
      onClick={() => {
        if (props.name == "Home") {
          navi("/");
        } else {
          navi("/" + props.name);
        }
      }}
      className="text-lg flex py-2 mx-8 px-3 rounded-sm text-white font-integral  transition-all duration-300 hover:text-black hover:bg-white"
    >
      {props.name}
    </div>
  );
}

export default Navop;
