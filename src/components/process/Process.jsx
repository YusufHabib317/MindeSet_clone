import m_1 from "../../assets/mindset-01.svg";
import m_2 from "../../assets/mindset-02.svg";
import m_3 from "../../assets/mindset-03.svg";

import b_1 from "../../assets/benifits_1.svg";
import b_2 from "../../assets/benifits_2.svg";
import b_3 from "../../assets/benifits_3.svg";

import { motion } from "framer-motion";

const Process = () => {
  const processCard = [
    {
      id: 1,
      number: m_1,
      title: "Learn",
      svg: b_1,
      description:
        "We take time to learn your service delivery process, brand identity and future goals.",
    },
    {
      id: 2,
      number: m_2,
      title: "Digitise",
      svg: b_2,
      description:
        "We quickly digitise and configure your offer and methodology into one platform.",
    },
    {
      id: 3,
      number: m_3,
      svg: b_3,
      title: "Activate",
      description:
        "We teach your team how to manage and utilise the platform - no tech background required.",
    },
  ];
  return (
    <div className="bg-[#F3F5F8] overflow-hidden">
      <div className="bg-bg_dark sm:px-[8rem] sm:py-[8rem] px-[3rem] py-[3rem] rounded-b-[3rem]">
        <div className="text-center">
          <p className="text-pink underline decoration-solid tracking-wide font-[500] leading-[1.3] sm:text-[2rem] text-[1rem]">
            process
          </p>
          <h2 className="text-white sm:text-[3rem] text-[1.5rem] mt-5">
            A simple and intuitive process
          </h2>
        </div>
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "tween" }}
          className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-10"
        >
          {processCard.map((b, idx) => {
            return (
              <div
                key={idx}
                className=" relative bg-white rounded-3xl text-center p-10 opacity-[0.9]"
              >
                <div className="absolute top-8 right-5">
                  <img
                    src={b.number}
                    alt=""
                    className="sm:w-20 sm:h-20 w-16 h-16 "
                  />
                </div>
                <div className="mt-10">
                  <div>
                    <img
                      src={b.svg}
                      alt=""
                      className="w-[10rem] h-[10rem] mx-auto"
                    />
                  </div>
                  <h2
                    className={`${
                      idx === 0 ? "text-pink" : "text-blue-400"
                    } md:text-[3rem] text-[1.5rem]`}
                  >
                    {b.title}
                  </h2>
                  <p className="md:text-[1.2rem] text-dark md:leading-7 text-[0.9rem] sm:text-[1.2rem] mt-5 leading-6">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
