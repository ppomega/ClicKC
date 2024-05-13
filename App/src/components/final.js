function Final(props) {
  const u = props.user;
  console.log(props.r);
  return (
    <div className="flex flex-col px-4 py-4  absolute top-96 left-[450px] font-Mon w-1/3 border-2 border-solid border-black rounded-3xl text-2xl">
      <div>Name:{u.name}</div>
      <div>MobileNumber:{u.MobileNumber}</div>
      <div>Address:{props.r}</div>
      <div>PaymentId:{props.data.razorpayPaymentId}</div>
      <div>Estimated Time:{Math.floor(Math.random() * 10)}Days</div>
    </div>
  );
}
export default Final;
