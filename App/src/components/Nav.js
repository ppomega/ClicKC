import Navop from "./Navop";
import SubStr from "../algos/substring";
import { Collt } from "../algos/collt";
import { useState } from "react";
import SearchOp from "./SearchOp";
function Nav(props) {
  const Search = props.setter;
  const type = ["Home", "Products", "Contact Us", "Cart"];
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = async (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length == 0) {
      Search(false, null);
    } else {
      const result = await fetch(
        `http://localhost:8080/fe/?value=${event.target.value}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          Search(true, data);
        });
    }
  };

  if (props.n) {
    return (
      <div className="w-full fixed top-0 z-10  flex bg-black text-white opacity-85  justify-around ">
        <img src="./images/navban.svg" className="w-10 h-8"></img>{" "}
        {type.map((type) => {
          return <Navop fn={props.fn} name={type}></Navop>;
        })}
        <input
          type="text"
          className=" my-2 rounded-lg border-style:solid border-1 border-purple-800 text-black"
        ></input>
      </div>
    );
  } else {
    return (
      <div className="w-full  flex bg-black text-white   justify-around ">
        <img src="./images/navban.svg" className="w-10 my-2 h-8"></img>{" "}
        {type.map((type) => {
          return <Navop fn={props.fn} name={type}></Navop>;
        })}
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          className=" my-2 rounded-lg border-style:solid border-1 border-purple-800 text-black"
        ></input>
      </div>
    );
  }
}

export default Nav;
