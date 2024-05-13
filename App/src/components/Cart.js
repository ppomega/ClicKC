import { useEffect, useState } from "react";
function Cart(props) {
  const [q, setQ] = useState(1);

  const path =
    "./images" + "/" + props.item.category + "/" + props.item.name + ".jpg";

  return (
    <>
      <div>
        <div className="flex justify-around ">
          <img src={path} className="w-1/6"></img>
          <div className="flex flex-col font-integral justify-around w-1/12">
            <h1>Name:{props.item.name}</h1>
            <h2 className="font-dmbold"> Quantity:{q}</h2>
            <span className="flex justify-around">
              <span
                className="bg-slate-300 rounded-md  px-2 my-1 "
                onClick={async (e) => {
                  e.preventDefault();
                  await setQ(() => {
                    if (q <= 1) {
                      props.fn(props.item);
                      props.prices(props.item.price);
                      return 1;
                    } else {
                      props.prices(props.item.price);
                      console.log("ye nahi hua");
                      return q - 1;
                    }
                  });
                }}
              >
                -
              </span>
              <span>{q}</span>
              <span
                className="bg-slate-300 rounded-md  px-2 my-1 "
                onClick={async (e) => {
                  e.preventDefault();
                  await setQ(() => {
                    return q + 1;
                  });
                  props.pricea(props.item.price);
                }}
              >
                +
              </span>
            </span>
          </div>
          <div className="flex flex-col font-integral w-1/5 justify-around">
            <div>Rate::INR{props.item.price}</div>
            <div>Quantity::{q}</div>
            <div>sub-total::INR{props.item.price * q}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
