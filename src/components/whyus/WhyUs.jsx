import coins from "../../assets/coins.svg";
import sitting from "../../assets/sitting.svg";
import calendar from "../../assets/calendar.svg";
import shield from "../../assets/shield.svg";
import connect from "../../assets/connect-02.svg";
import { motion } from "framer-motion";

const WhyUs = () => {
  const dataWhyUs = [
    {
      id: 1,
      icons: coins,
      descriptiopn:
        "On average, we’re 3-6 times cheaper than hiring a development team",
    },
    {
      id: 2,
      icons: sitting,
      descriptiopn:
        "Our monthly fees cover technical support and ongoing maintenance costs, which often far exceed the initial development fees",
    },
    {
      id: 3,
      icons: calendar,
      descriptiopn:
        "The process with Mindset AI takes weeks rather than months or years",
    },
    {
      id: 4,
      icons: shield,
      descriptiopn:
        "We have the highest levels of security, saving you time, money and the stress of making a security plan",
    },
    {
      id: 5,
      icons: connect,
      descriptiopn:
        "Mindset AI offers you a team beyond developers - our customers love working with our designers and customer success team once they’ve got their own platform!",
    },
  ];
  return (
    <div className="bg-[#F3F5F8] px-10 py-10 overflow-hidden">
      <div className="pt-[8rem] pl-[5rem]">
        <p className="text-pink underline decoration-solid md:text-[1.25rem] text-[1rem] leading-[1.3] font-[500] tracking-[1px]">
          Why Us?
        </p>
        <h2 className="text-[#36353a] md:text-[3rem] text-[1.5rem] leading-[1.2] font-[600]">
          Why shouldn’t I hire a development team?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {dataWhyUs.map((why, idx) => {
          return (
            <motion.div
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, type: "tween" }}
              key={idx}
              className="text-center shadow-lg opacity-[0.8] p-8 rounded-[2rem] flex flex-col justify-center items-center bg-white"
            >
              <img src={why.icons} className="w-[5rem]" />
              <p className="my-8 text-[#616262] text-[1.13]">
                {why.descriptiopn}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
