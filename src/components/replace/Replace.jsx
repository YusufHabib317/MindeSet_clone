import "./replace.css";
import msgIcon from "../../assets/message-icon.svg";

const Replace = () => {
  return (
    <div className="bg-dark overflow-hidden">
      <div className="replace flex justify-center items-center px-[5rem] py-[8rem] min-h-full  rounded-b-[3rem]">
        <div
          className="text-center bg-dark px-[15rem] py-[9rem]  rounded-[3rem] flex justify-center items-center flex-col 
      border-black border-[3px] shadow-xl
      "
        >
          <h2 className="text-white md:text-[3rem] text-[2.5rem] leadin-[1.1] font-[600] mx-auto">
            Replace your current tools with our scalable and cost efficient
            alternative today.
          </h2>
          <div className="bg-pink text-white text-[1.2rem] px-6 py-3 w-fit flex items-center my-5 rounded-xl gap-3 mt-10 font-bold">
            <button>Schedule a Discussion</button>
            <img src={msgIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Replace;
