const Razorpay = require("razorpay");
async function createorder(amt) {
  try {
    const instance = new Razorpay({
      key_id: "rzp_test_MbauiHI7q22xi3",
      key_secret: "oDtomKf5cWlJxl9ABThXkjdy",
    });
    // key_id,key_secret
    // rzp_test_MbauiHI7q22xi3,oDtomKf5cWlJxl9ABThXkjdy

    const options = {
      amount: amt, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);
    // const order = await instance.orders.all();
    if (!order) {
      console.log("bt ho gayi");
      return false;
    } else {
      console.log(order);
      return order;
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = createorder;
