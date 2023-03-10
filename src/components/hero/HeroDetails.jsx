import "./heroDetail.css";

import { useEffect, useRef } from "react";

import Navbar from "../Navbar";
import dollarIcon from "../../assets/dollar-icon.svg";
import heroImg from "../../assets/person-edit.png";
import msgIcon from "../../assets/message-icon.svg";
import percentageIcon from "../../assets/percentage-icon.svg";
import { useState } from "react";

const HeroDetails = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    const start = () => {
      setTimeout(() => {
        setState("Learning");
      }, 0);
      setTimeout(() => {
        setState("Development");
      }, 3000);
      setTimeout(() => {
        setState("Coaching");
      }, 6000);
    };

    start();
    const clr = setInterval(start, 12000);

    return () => {
      clearTimeout(start);
      clearInterval(clr);
    };
  }, []);

  return (
    <div className="bg-grey rounded-[2rem] overflow-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 sm:px-10 px-1 m-auto">
        <div className="w-full px-2 ">
          <div className="flex flex-col justify-start items-start w-full">
            <p className="text-dark sm:text-[4rem] text-[2rem] font-bold">
              Making
            </p>

            <div className="overflow-hidden w-[26rem]">
              <span className="ss relative sm:text-[4rem] text-[2rem] font-[600] text-pink underline  decoration-dashed ">
                {state}
              </span>
            </div>
            <p className="text-dark text-[2rem] sm:text-[4rem] font-bold">
              scalable
            </p>
          </div>
          <div className="w-full">
            <p className="sm:text-[1.2rem] text-[0.6rem] text-p_grey_dark">
              Transform your business into a tech-driven powerhouse
            </p>
            <div className="mt-3 flex flex-col justify-center items-start">
              <div className="flex justify-center items-center gap-2 ml-2">
                <div>
                  <img
                    src={dollarIcon}
                    alt="dollarIcon"
                    className="w-11 h-11 sm:w-16 sm:h-16"
                  />
                </div>
                <p className="text-p_grey_light sm:leading-8 leading-5 sm:text-sm md:text-[1rem] text-[0.56rem] ">
                  calendar icon Launch your own branded platform that fits your
                  business needs within 6 weeks
                </p>
              </div>
              <div className="flex justify-center items-center gap-2 ml-2">
                <div>
                  <img
                    src={dollarIcon}
                    alt="dollarIcon"
                    className="w-11 h-11 sm:w-16 sm:h-16"
                  />
                </div>
                <p className="text-p_grey_light sm:leading-8 leading-5 sm:text-sm md:text-[1rem] text-[0.56rem] ">
                  Make better decisions and gain a competitive advantage with
                  data-driven insights
                </p>
              </div>
              <div className="flex justify-center items-center gap-2 ml-2">
                <div>
                  <img
                    src={percentageIcon}
                    alt="dollarIcon"
                    className="w-11 h-11 sm:w-16 sm:h-16"
                  />
                </div>
                <p className="text-p_grey_light sm:leading-8 leading-5 sm:text-sm md:text-[1rem] text-[0.56rem] ">
                  Monetise your offering more effectively through recurring
                  revenue streams and upselling
                </p>
              </div>
            </div>
          </div>
          <div className="bg-pink text-white sm:text-[1.2rem] text-[0.7rem] px-3 py-1.5 sm:px-6 sm:py-3 w-fit flex items-center my-5 rounded-xl gap-3">
            <button>Schedule a Discussion</button>
            <img src={msgIcon} alt="" />
          </div>
        </div>
        <div className="z-10 ">
          <img src={heroImg} alt="person" />
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
