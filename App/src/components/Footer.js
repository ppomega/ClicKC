import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="w-full text-white bg-black font-Mon p-8">
      <div className="flex flex-row  text-white bg-black flex-wrap items-center justify-center gap-y-6 gap-x-12 text-xl text-center md:justify-between">
        <img src="./images/logo.svg" className="w-2/12"></img>
        <ul className="flex flex-wrap text-white bg-black items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white bg-black transition-colors hover:text-bermuda focus:text-bermuda"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white bg-black transition-colors  hover:text-bermuda focus:text-bermuda"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white bg-black  transition-colors  hover:text-bermuda focus:text-bermuda"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white bg-black   hover:text-bermuda focus:text-bermuda"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center text-white bg-black font-normal"
      >
        &copy; 2024 ClickCart
      </Typography>
    </footer>
  );
}
export default Footer;
