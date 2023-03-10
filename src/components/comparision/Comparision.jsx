import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
import { motion } from "framer-motion";
const Comparision = () => {
  return (
    <div className="bg-[#F3F5F8] overflow-hidden">
      <div className="bg-dark py-[5rem] px-[5rem] rounded-b-[3rem]">
        <div>
          <p className="text-pink underline decoration-solid tracking-wide font-[500] leading-[1.4] text-[1.5rem]">
            comparison
          </p>
          <h2 className="sm:text-[3rem] text-[1.7rem] my-8 text-white font-[600]">
            Mindset AI vs an overload of tools
          </h2>
          <p className="sm:text-[1.5em] text-[0.8rem] text-[#dfe2e7]">
            Mindset AI replaces your current tools, providing a scalable and
            cost-efficient alternative. Stop paying thousands to numerous
            different software providers. Our all-in-one configurable platform
            is the most comprehensive solution for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="bg-white opacity-[0.9] rounded-[2.5rem] p-7"
          >
            <h2 className="text-pink font-[600] md:text-[2.5rem] text-[1.5rem]">
              An overload of tools
            </h2>
            <ul className="flex flex-col justify-center sm:items-start items-center text-left">
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={cross} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Difficult and time-consuming to manage
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={cross} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Poor customer experience
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={cross} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Little customer engagement
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={cross} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Minimal branding
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={cross} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Expensive
                </p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="bg-white opacity-[0.9] rounded-[2rem] p-7"
          >
            <h2 className="text-[#28cebe] font-[600]  md:text-[2.5rem] text-[1.3rem]">
              An overload of tools
            </h2>
            <ul className="flex flex-col justify-center sm:items-start items-center text-left">
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={tick} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Your brand at the forefront
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={tick} alt="" className="md:w-[4rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Configurable to your needs - no developers needed
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={tick} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Cost-effective
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={tick} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Personalised content for each user
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={tick} alt="" className="md:w-[2.5rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Ongoing support
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={tick} alt="" className="md:w-[4rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Regular changes keeping you ahead of your competition
                </p>
              </li>
              <li className="flex sm:flex-row flex-col justify-center items-center my-3">
                <img src={tick} alt="" className="md:w-[4rem] mr-[1rem]" />
                <p className="text-[#616262] md:text-[1.3rem] text-[1rem]">
                  Customer insights to make your business more powerful
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Comparision;
