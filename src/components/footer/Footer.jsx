import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="bg-dark flex flex-col w-full items-center justify-center px-[5rem] py-[5rem] overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full">
        <img src={logo} alt="logo" className="w-30 h-30" />
        <button className="text-white bg-pink font-bold text-[1rem] rounded-lg px-2 py-2">
          Get in Touch
        </button>
      </div>
      <div className="text-grey bg-[#414044] sm:w-full h-[1px] mt-2" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-col  text-white transition-all space-y-3">
          <li className="hover:text-p_grey_dark  transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-p_grey_dark  transition-all">
            <Link to="/">About</Link>
          </li>
          <li className="hover:text-p_grey_dark  transition-all">
            <Link to="/">Product</Link>
          </li>
          <li className="hover:text-p_grey_dark  transition-all">
            <Link to="/">Resources</Link>
          </li>
          <li className="hover:text-p_grey_dark  transition-all">
            <Link to="/">FAQ</Link>
          </li>
          <li className="hover:text-p_grey_dark  transition-all">
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <form className="basis-[50%] text-white flex flex-col ">
          <p className="my-5 font-[700] text-[1.3rem]">
            Sign up to our newsletter
          </p>
          <label htmlFor="signup">
            Email <span className="text-red-500">*</span>
            <input
              type="text"
              name="signup"
              className="w-full rounded-lg h-9 mt-3 outline-none text-[#000] p-2"
            />
          </label>
          <label htmlFor="signup" className="my-5">
            First Name
            <input
              type="text"
              name="signup"
              className="w-full rounded-lg h-9 mt-3 outline-none text-[#000] p-2"
            />
          </label>
          <label htmlFor="signup">
            Last Name
            <input
              type="text"
              name="signup"
              className="w-full rounded-lg h-9 mt-3 outline-none text-[#000] p-2"
            />
          </label>
          <p className="text-white my-5 text-[1rem]">
            Mindset AI will use the contact information you provide to us to
            contact you about our products and services. You may unsubscribe
            from these communications at any time.
          </p>
          <label htmlFor="" className="flex md:flex-row flex-col">
            <input type="checkbox" name="" id="" />
            <p className="ml-3">
              I agree to receive other communications from Mindset AI.
            </p>
          </label>
          <button className="bg-pink rounded-[1rem] text-white w-fit px-6 py-2 text-lg mt-5 gony-[600]">
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[0.6rem] mt-10 w-full">
        <div className="text-white">
          <Link
            to="/"
            className="opacity-[0.5] hover:opacity-[1] transition-all"
          >
            Copyright Ⓒ2022 Mindset Ai Ltd. All rights reserved.
          </Link>
          <Link
            to="/"
            className="ml-5 opacity-[0.5] hover:opacity-[1] transition-all"
          >
            Website Powered by Legacy Design Agency
          </Link>
        </div>
        <div className="text-white">
          <Link
            to="/"
            className="opacity-[0.5] hover:opacity-[1] transition-all"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/"
            className="ml-5 opacity-[0.5] hover:opacity-[1] transition-all"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
