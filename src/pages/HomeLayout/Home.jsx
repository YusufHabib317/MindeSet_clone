import Benefits from "../../components/benefits/Benefits";
import Comparision from "../../components/comparision/Comparision";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Process from "../../components/process/Process";
import Replace from "../../components/replace/Replace";
import Testimonials from "../../components/testimonials/Testimonials";
import WhyUs from "../../components/whyus/WhyUs";

function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Process />
      <Feature />
      <Comparision />
      <WhyUs />
      <Testimonials />
      <Replace />
      <Footer />
    </>
  );
}

export default Home;
