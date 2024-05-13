import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";

function Login(props) {
  const loc = useLocation();
  const t = loc.state;
  const [u, setU] = useState({});
  const navi = useNavigate();
  const [o, setO] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [num, setMobile] = useState(null);

  const [ot, setOt] = useState(false);
  async function Authn(num) {
    var Otp = Math.floor(Math.random() * 10000);
    console.log(Otp);
    setO(Otp);
    const r = await fetch(
      "https://www.fast2sms.com/dev/bulkV2?authorization=Z2oGwTEMt4prkX8mbqlCPnW6HYLRAIyQhsUajSvJi5KNe0dz1fRHuaYMx6owOimPTnUEb74yDdhkCIQN&route=otp&variables_values=" +
        Otp +
        "&flash=0&numbers=" +
        num
    )
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        return d;
      });
    return r;
  }
  async function Log(e) {
    e.preventDefault();
    const res = await fetch(
      "http://localhost:8080/login?name=" +
        e.target[0].value +
        "&password=" +
        e.target[1].value
    )
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        return d;
      });
    if (JSON.stringify(res) !== JSON.stringify({})) {
      await setU(res);
      await props.user(res);

      navi("/pay", { state: t });
    } else {
      console.log("error while logging");
    }
  }
  async function SignIn(e) {
    e.preventDefault();
    var otp = document.getElementById("otp");
    const po = parseInt(otp.value);
    if (o == po) {
      const res = await fetch(
        "http://localhost:8080/signup?" +
          "name=" +
          name +
          "&mobilenumber=" +
          num +
          "&password=" +
          password
      )
        .then((res) => {
          return res.json();
        })
        .then((d) => {
          return d;
        });
      await setU(res);
      await props.user(res);
      navi("/pay", { state: t });
    }
  }

  async function Submit(e) {
    e.preventDefault();
    var r = await Authn(e.target[1].value);
    setName(e.target[0].value);
    setPassword(e.target[2].value);
    setMobile(e.target[1].value);
    setOt(true);
    // console.log(o);
  }
  return (
    <div className="bg-hero-pattern  bg-no-repeat bg-cover w-screen h-screen  ">
      <img
        src="./images/logoo.svg"
        className="w-52 fixed z-20 top-1/3 right-72"
      ></img>{" "}
      <div className="h-1/3 relative top-24 left-64 font-dmbold z-20 font-bold   w-1/4">
        <form
          method="POST"
          className="flex flex-col justify-between"
          onSubmit={Submit}
        >
          <label className="py-1 mx-1">Name:{props.o}</label>
          <input className="rounded-sm mx-24 border-2  "></input>
          <label className="py-1 mx-1">Mobile Number</label>
          <input className="rounded-sm mx-24 border-2"></input>
          <label className="py-1 mx-1">Password</label>
          <input className="rounded-sm mx-24 border-2" type="password"></input>
          {ot ? (
            <>
              <label className="py-1 mx-1">OTP</label>
              <input className="rounded-sm mx-24 border-2" id="otp"></input>
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full justify-start ">
            <button
              type="Submit"
              className="mx-20 rounded-md bg-black text-white text-md px-4 my-4 "
            >
              Submit
            </button>
            {ot ? (
              <>
                <button
                  onClick={SignIn}
                  className="mx-20 rounded-md bg-black  text-white text-md px-4  my-3 "
                >
                  Verify and Submit
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
      <div className="h-1/3 relative top-56 left-64 font-dmbold z-20 font-bold   w-1/4">
        <form
          method="GET"
          className="flex flex-col   justify-between "
          onSubmit={Log}
        >
          <label className="py-1 mx-1">Username</label>
          <input className="rounded-sm mx-24 border-2  "></input>

          <label className="py-1 mx-1">Password</label>
          <input className="rounded-sm mx-24 border-2" type="password"></input>
          <button
            type="Submit"
            className="mx-32 rounded-md bg-black  text-white text-md py-1 my-4 "
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex bg-footer-textue border-r-2 border-white border-l border-s-black bg-cover opacity-20 font-bold rounded-2xl absolute font-dmbold bg-slate-400 h-3/4 w-4/6 top-24 right-64  "></div>
    </div>
  );
}

export default Login;
