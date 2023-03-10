import logo_1 from "../../assets/ceannaslogo.svg";
import logo_2 from "../../assets/logo-brilliant.svg";
import logo_3 from "../../assets/logo-achieve.svg";
import logo_4 from "../../assets/logo-hact.svg";
import logo_5 from "../../assets/logo-ok.svg";

const Partner = () => {
  return (
    <div className="bg-white p-5 rounded-b-[2rem]">
      <h2 className="w-fit mx-auto mt-20 text-dark text-5xl font-bold">
        Some of our core partners
      </h2>
      <div className="flex flex-col md:flex-row gap-5 p-5 justify-center items-center mt-10">
        <img src={logo_1} alt="" className="w-[10rem]" />
        <img src={logo_2} alt="" className="w-[10rem]" />
        <img src={logo_3} alt="" className="w-[10rem]" />
        <img src={logo_4} alt="" className="w-[10rem]" />
        <img src={logo_5} alt="" className="w-[4rem]" />
      </div>
    </div>
  );
};

export default Partner;
