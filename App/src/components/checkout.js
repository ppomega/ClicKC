import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Final from "./final";
function CheckOut(props) {
  const [s, setS] = useState(false);
  var [o, setO] = useState(null);
  var [r, setR] = useState(null);
  const loc = useLocation();
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post("http://localhost:8080/order?", null, {
      params: {
        value: loc.state * 100,
      },
    });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    } else {
      console.log(9);
    }
    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;
    console.log(result.data);
    const options = {
      key: "rzp_test_MbauiHI7q22xi3", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: props.user.name,
      description: "Transaction",

      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(data);
        setO(data);
        setS(true);
      },
      prefill: {
        name: props.user.name,
        email: "Sop@example.com",
        contact: props.user.mobilenumber,
      },
      notes: {
        address: r,
      },
      theme: {
        color: "#feff32",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
      <Nav
        user={props.user}
        fn={props.fn}
        n={props.n}
        data={props.data}
        setter={props.setter}
      ></Nav>
      <div className="font-Mon ">
        <form
          method="GET"
          className="flex flex-col relative top-3 left-96 w-1/2 justify-between "
        >
          <label className="py-1 mx-1">Address(with Pincode)</label>
          <input id="Add" className="rounded-sm mx-24 my-4 border-2  "></input>

          <label className="py-1 mx-1">Feedback(rating out of 10)</label>
          <input
            id="f"
            className="rounded-sm mx-24 my-8 border-2"
            type="text"
          ></input>

          <div
            className="bg-black text-white  w-24 absolute px-2 mx-4 my-0 top-64 right-96 rounded-lg text-md"
            onClick={() => {
              var rr = document.getElementById("Add");
              setR(rr.value);

              displayRazorpay();
            }}
          >
            PAY ₹{loc.state}
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 w-full h-5">
        {" "}
        <Footer user={props.user}></Footer>
      </div>
      {s ? <Final r={r} data={o} user={props.user}></Final> : <></>}
    </>
  );
}

export default CheckOut;
