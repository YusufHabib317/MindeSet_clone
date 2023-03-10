import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      const width = window.innerWidth;
      if (width > 640) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <div className="flex justify-between items-center p-5 gap-5">
      <div className="">
        <img
          src={logo}
          alt="logo"
          className="w-[8.63rem] h-[1.25rem] inline-block max-w-full
          "
        />
      </div>
      <div className="text-dark text-3xl cursor-pointer  sm:hidden ">
        <FiMenu onClick={() => setToggle(true)} />
      </div>
      <div className="hidden sm:flex justify-between items-center text-dark transition-all gap-4 sm:text-[0.75rem] md:text-[1rem] ">
        <li className="p-5 sm:p-3 font-bold  cursor-pointer hover:text-hover_link">
          <Link to="/">Home</Link>
        </li>
        <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
          <Link to="/">Product</Link>
        </li>
        <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
          <Link to="/">FAQ</Link>
        </li>
        <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
          <Link to="/">About</Link>
        </li>
        <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
          <Link to="/">Resource</Link>
        </li>
        <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
          <Link to="/">Help</Link>
        </li>
        <li
          className="text-pink border-2 border-pink  rounded-lg sm:text-[0.9rem] font-bold md:px-3 md:py-2 px-2 py-1
        cursor-pointer transition-all  hover:text-hover_btn hover:border-hover_btn
        "
        >
          <button>Get In Touch</button>
        </li>
      </div>
      {toggle && (
        <div
          className="absolute top-0 left-0
         bg-grey  h-[calc(100vh_-_10rem)] w-full flex flex-col justify-center items-center
         sm:hidden z-50
         "
        >
          <div
            className="absolute top-[8%] right-[5%] text-2xl cursor-pointer
          "
            onClick={() => setToggle(false)}
          >
            <GrClose />
          </div>
          <div className="flex justify-center items-center flex-col text-dark transition-all sm:text-[0.75rem] md:text-[1rem] ">
            <li className="p-5 sm:p-3 font-bold  cursor-pointer hover:text-hover_link">
              <Link to="/">Home</Link>
            </li>
            <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
              <Link to="/">Product</Link>
            </li>
            <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
              <Link to="/">FAQ</Link>
            </li>
            <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
              <Link to="/">About</Link>
            </li>
            <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
              <Link to="/">Resource</Link>
            </li>
            <li className="p-5 sm:p-3 font-bold cursor-pointer hover:text-hover_link">
              <Link to="/">Help</Link>
            </li>
            <li
              className="text-pink border-2 border-pink  rounded-lg text-sm font-bold px-3 py-2 sm:px-2 sm:py-1
        cursor-pointer transition-all  hover:text-hover_btn hover:border-hover_btn
        "
            >
              <button>Get In Touch</button>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
