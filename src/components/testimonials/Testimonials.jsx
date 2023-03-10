import r_1 from "../../assets/Review-01.png";
import r_2 from "../../assets/Review-02.png";
import q_1 from "../../assets/quote-01.svg";
import q_2 from "../../assets/quote-02.svg";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      img: r_1,
      name: "Jacqui Bateson",
      job: "Managing Director,",
      subJob: "HACT",
      qoute: q_1,
      review:
        "Pre-Mindset, our product development relied on manual intervention and spreadsheets and was unscalable and inefficient. It was a challenge to create customer experience and navigation excellence. Partnering with Mindset AI has enabled us to grow into a digital first business where agile product development has become the norm. The way in which our customers interact with us is changing for the better. The number of customer accounts we manage from our platform is growing day by day to levels we had not anticipated so soon in our transformation. Customers now engage with our products & tools, which enables them to have an amazing experience using just one platform. Automated reporting saves our team time and we have been successfully moving customers over to a scalable recurring revenue model.",
    },
    {
      id: 2,
      img: r_2,
      name: "Theresa Caragol",
      job: "Founder and CEO,",
      subJob: "AchieveUnite",
      qoute: q_2,
      review:
        "We want to scale and help more people faster using our Partnering Quotient Index and Mindset AI makes this possible. Everyone in the team at Mindset is an expert in their craft and their commitment to client success is a cornerstone to their own success. This platform is game-changing.",
    },
  ];
  return (
    <div className="bg-dark px-10 py-10 flex flex-col justify-center items-center space-y-10 overflow-hidden">
      <div className="w-full text-center">
        <p className="text-pink underline decoration-solid tracking-wide font-[500] leading-[1.3] text-[1.4rem]">
          Testimonials
        </p>
        <h2 className="text-white md:text-[3rem] text-[2em] font-[600] leading-[1.2]">
          But don’t just take our word for this…
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {testimonialsData.map((r, idx) => {
          return (
            <motion.div
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, type: "tween" }}
              className="bg-white opacity-[0.9] flex flex-col items-start justify-between p-5 basis-[50%] rounded-[2rem] "
            >
              <div className="flex flex-row justify-center items-center">
                <img src={r.img} alt="" className=" w-12 h-12 mr-5 " />

                <div>
                  <p className="text-[1rem] leading-[1.4] font-[600] text-[#616262]">
                    {r.name}
                  </p>
                  <div className="flex flex-col items-centerj justify-center">
                    <p className="text-[#616262] font-[300] leading-[1.4] text-[0.88rem]">
                      {r.job}
                    </p>
                    <p className="text-[#616262] font-[300] leading-[1.4] text-[0.88rem]">
                      {r.subJob}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={r.qoute}
                  alt=""
                  className="md:w-25 md:h-25 w-15 h-15 my-10"
                />
              </div>

              <p className="text-[#616262] leading-[1.6] text-[1rem] h-[35rem] sm:h-[23rem] md:h-[18rem] lg:h-[28rem] xl:h-[20rem] mb-5">
                {r.review}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
