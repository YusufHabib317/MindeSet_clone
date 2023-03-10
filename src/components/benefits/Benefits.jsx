import "./benifit.css";

import { useEffect, useRef, useState } from "react";

import benifit1 from "../../assets/benefit-1.png";
import benifit2 from "../../assets/benefit-2.png";
import benifit3 from "../../assets/benefit-3.png";
import { motion } from "framer-motion";

const Benefits = () => {
  const [smalldScreen, setSmalldScreen] = useState(false);

  useEffect(() => {
    const handleBenifit = () => {
      if (window.innerWidth < 990) setSmalldScreen(true);
      if (window.innerWidth > 990) setSmalldScreen(false);
    };
    window.addEventListener("resize", handleBenifit);

    return () => {
      window.removeEventListener("resize", handleBenifit);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? 1 : id);
  };
  useEffect(() => {
    const index_ = [1, 2, 3, 4];
    const lastIndex = index_.length - 1;

    if (index_ < 0) setActiveIndex(lastIndex);
    if (activeIndex > lastIndex) setActiveIndex(1);

    const timer = setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
    }, [5000]);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  const benifitData = [
    {
      id: 1,
      title: "Helping you save time and be efficient",
      descriptipn:
        "​​Mindset AI automates the most time-consuming tasks in your business so you can focus on the people and customers who count.",
      img: benifit1,
    },
    {
      id: 2,
      title: "Providing a smarter customer experience",
      descriptipn:
        "​​The platform delivers a highly personalised and unique experience to each user. Our AI engine learns from what a user engages with most and can adjust their experience accordingly - showing more relevant content to keep their engagement high.",
      img: benifit2,
    },
    {
      id: 3,
      title: "Giving you the data you need to achieve your ambitions",
      descriptipn:
        "Our bespoke dashboards combine data gathering, data storage, and knowledge management with data analysis to evaluate and transform complex data into meaningful, actionable information to drive your business strategy or report to customers.",
      img: benifit3,
    },
  ];

  return (
    <div className="bg-dark overflow-hidden">
      <div className="bg-[#F3F5F8] rounded-b-[3rem] px-10">
        <div className="pt-[10rem]">
          <p className="text-pink underline decoration-solid tracking-wide font-[500] leading-[1.3] text-[1.25rem]">
            Benefits
          </p>
          <h2 className="text-dark md:text-[3rem] font-bold md:my-[2rem] text-[2rem] my-[1rem]">
            Transform your business
          </h2>
          <p className="text-p_grey_ligh text-[#616262] font-[400] md:max-w-[60rem] leading-[1.4] md:text-[1.5rem] text-[1rem]">
            Mindset AI provides you one branded, fully configurable and
            easy-to-use platform for your workshops, micro-learning, online
            content, surveys, psychometric tests, 360s, communities, client
            reporting, engagement tracking and much more.
          </p>
        </div>
        {!smalldScreen && (
          <div className="flex flex-col  md:flex-row-reverse mt-[7rem] gap-10 justify-center items-start">
            <div className="flex flex-col">
              {benifitData.map((benifit, idx) => {
                return (
                  <>
                    <div
                      key={idx}
                      onClick={() => handleClick(benifit.id)}
                      className={`${
                        benifit.id === activeIndex
                          ? "bg-white shadow-xl "
                          : "bg-transparent "
                      } my-[2.5rem] rounded-3xl p-10`}
                    >
                      <div className="relative">
                        <div
                          className={`text ${
                            benifit.id === activeIndex ? "move" : ""
                          }`}
                        >
                          <h2 className="text-[1.6rem] text-dark leading-[1.3] font-[600] cursor-pointer ">
                            {benifit.title}
                          </h2>
                          {benifit.id === activeIndex && (
                            <p className="text-[1.3rem] text-[#616262] font-[400] my-8">
                              {benifit.descriptipn}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {benifitData.map((benifit, idx) => {
              return (
                <>
                  {benifit.id === activeIndex && (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ type: "tween", duration: 0.5 }}
                    >
                      <img
                        src={benifit.img}
                        alt=""
                        className="min-h-[30rem] min-w-[33rem]"
                      />
                    </motion.div>
                  )}
                </>
              );
            })}
          </div>
        )}
        {smalldScreen && (
          <div className="flex flex-col justify-center items-center">
            {benifitData.map((benifit, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-xl my-5 p-10"
                >
                  <img src={benifit.img} alt="" />
                  <div>
                    <h2 className="text-[1.6rem] text-dark leading-[1.3] font-[600] cursor-pointer my-5 ">
                      {benifit.title}
                    </h2>
                    <p className="text-[1.3rem] text-[#616262] font-[400] my-8">
                      {benifit.descriptipn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Benefits;
