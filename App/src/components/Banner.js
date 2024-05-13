import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navi = useNavigate();
  return (
    <div className="w-full bg-Ban bg-cover flex ">
      <div className="text-white font-Mon py-52 px-9 text-7xl">
        {" "}
        Here Trends are ReBorn
        <div className="font-Mon text-xl py-8 w-1/2 leading-10 text-zinc-400">
          We've learned that people will forget what you said, people will
          forget what you did, but people will never forget how you made them
          feel through your service.{" "}
          <button
            onClick={() => {
              navi("/products");
            }}
            className="text-4xl rounded-md text-black bg-bermuda transition-all duration-300 hover:text-bermuda hover:bg-black"
          >
            {" "}
            Get Started
          </button>
        </div>
      </div>
      <img className="w-1/3 opacity-85" src="./images/BaNN.svg"></img>
    </div>
  );
}
export default Banner;
