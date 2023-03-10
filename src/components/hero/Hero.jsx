import HeroDetails from "./HeroDetails";
import Partner from "./Partner";

const Hero = () => {
  return (
    <div className="bg-white pt-10 mr-10 ml-10 px-2 rounded-[2rem] overflow-hidden">
      <HeroDetails />
      <Partner />
    </div>
  );
};

export default Hero;
