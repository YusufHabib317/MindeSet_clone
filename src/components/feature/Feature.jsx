import f_2 from "../../assets/feature-02.png";
import f_1 from "../../assets/feature-01.png";
import f_3 from "../../assets/features-03.png";
import f_4 from "../../assets/features-04.png";
import f_5 from "../../assets/-features-02.png";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div className="rounded-b-[3rem] overflow-hidden">
      <div className="py-[5rem] px-[5rem] bg-[#F3F5F8] text-center ">
        <p className="text-pink underline decoration-solid tracking-wide font-[500] leading-[1.3] text-[2rem]">
          Features
        </p>
        <h2 className="text-dark md:text-[3rem] font-[600] md:my-[2rem] text-[2rem] my-[1rem]">
          Wouldn't it be easy if one platform did everything your team needs?
        </h2>
        <p className="text-[#616262] text-[1rem] md:text-[1.5rem]">
          One platform provides a truly connected customer experience that
          end-users can access via mobile, web, tablets and even wearables.
        </p>
      </div>
      <div className="py-[5rem] px-[5rem] bg-[#FFFFFF] flex md:flex-row flex-col justify-center items-center gap-x-10">
        <div>
          <h2 className="text-[#36353A] md:text-[2.5rem] text-[1.3rem] mb-10 font-bold">
            Run workshops
          </h2>
          <p className="md:text-[1.13rem] text-[0.75rem] text-[#616262] leading-7 mt-10">
            Our facilitation functionality supports a 1:1 or group workshop
            process - either remote or in-person. Manage any session that
            delivers engaging content for your users to interact with over time.
            Invite users and control how you publish content for them before,
            during and after your session, keeping them engaged long after the
            workshop has ended.
          </p>
        </div>
        <div>
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            src={f_2}
            alt=""
            className="md:w-[200rem] w-[100rem]"
          />
        </div>
      </div>
      <div className="py-[5rem] px-[5rem] bg-[#F3F5F8] flex md:flex-row-reverse flex-col-reverse justify-center items-center gap-x-10">
        <div className="">
          <h2 className="text-[#36353A] md:text-[2.5rem] text-[1.3rem] mb-10 font-bold">
            Build surveys and 360 assessments
          </h2>
          <p className="md:text-[1.13rem] text-[0.75rem] text-[#616262] leading-7 mt-10">
            Flexible surveys can be used to deliver anything from complex
            psychometric assessments and 360 reviews to simply asking users a
            few simple questions to learn more about them.
          </p>
        </div>
        <div>
          <motion.img
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            src={f_1}
            alt=""
            className="md:w-[100rem] w-[75rem]"
          />
        </div>
      </div>
      <div className="py-[5rem] px-[5rem] bg-[#ffffff] flex md:flex-row flex-col justify-center items-center gap-x-20">
        <div className="">
          <h2 className="text-[#36353A] md:text-[2.5rem] text-[1.3rem] mb-10 font-bold">
            Host online chat groups
          </h2>
          <p className="md:text-[1.13rem] text-[0.75rem] text-[#616262] leading-7 mt-10">
            Support hybrid learning and build communities with 1:1 or group
            chat. Create engaging conversation by sending relevant content to
            users to create discussion points.
          </p>
        </div>
        <div>
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            src={f_3}
            alt=""
            className="md:w-[100rem] w-[50rem]"
          />
        </div>
      </div>
      <div className="py-[5rem] px-[5rem] bg-[#F3F5F8] flex md:flex-row-reverse flex-col-reverse justify-center items-center gap-x-20">
        <div className="">
          <h2 className="text-[#36353A] md:text-[2.5rem] text-[1.3rem] mb-10 font-bold">
            Receive instant reporting and tracking
          </h2>
          <p className="md:text-[1.13rem] text-[0.75rem] text-[#616262] leading-7 mt-10">
            Our business intelligence dashboards provide you with a 360 degree
            view of every single end-user, their preferences and how to best
            help them.
          </p>
        </div>
        <div>
          <motion.img
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            src={f_4}
            alt=""
            className="md:w-[100rem] w-[50rem]"
          />
        </div>
      </div>
      <div className="py-[5rem] px-[5rem] bg-[#ffffff] flex md:flex-row flex-col justify-center items-center gap-x-20 rounded-b-[5rem]">
        <div className="">
          <h2 className="text-[#36353A] md:text-[2.5rem] text-[1.3rem] mb-10 font-bold">
            Schedule daily check ins and reflections
          </h2>
          <p className="md:text-[1.13rem] text-[0.75rem] text-[#616262] leading-7 mt-10">
            Allow users to check in daily and observe their patterns and
            reflections to encourage positive behavioural change and inform
            business decisions.
          </p>
        </div>
        <div>
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            src={f_5}
            alt=""
            className="md:w-[100rem] w-[50rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
