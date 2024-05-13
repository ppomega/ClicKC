import { useNavigate } from "react-router-dom";
import Button from "./Button";
// import { useState } from "react";
const t = "buy now";

function Card(props) {
  const navi = useNavigate();
  const item = props.item;

  const path =
    "./images" + "/" + props.item.category + "/" + props.item.name + ".jpg";
  return (
    <div
      onClick={() => {
        navi("/product", { state: item });
      }}
      className=" max-w-sm flex mx-2 flex-col bg-Card bg-cover justify-between px-2 py-2 my-4  transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-bermuda hover:text-white hover:bg-Card1 rounded-lg "
    >
      <img
        className="  py-2 relative left-14 mx-16 rounded-3xl max-w-36 max-h-40"
        src={path}
      ></img>
      <div className="flex justify-between ">
        <h1 className="font-extrabold text-md px-2 text-black bg-white rounded-md font-integral">
          {props.item.name}
        </h1>
        <h1 className="font-extrabold text-lg text-black bg-white rounded-md px-3 font-integral">
          ₹{props.item.price}
        </h1>
      </div>
      <h1 className="font-integral w-2 text-xs text-black bg-white rounded-md">
        {props.item.category}
      </h1>
      <div className=" flex py-2 justify-around  ">
        <Button fn={props.c} price={props.pricea} name={t} item={props.item} />
        <Button
          fn={props.c}
          price={props.pricea}
          item={props.item}
          name="Add to cart"
        />
      </div>
    </div>
  );
}

export default Card;
