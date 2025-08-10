import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import HowItWorksSection from "../components/HowItWorksSection";
import Mission from "../components/Mission";
import Contact from "../components/Contact";

const Home = () => {
  
  return (
    <div>
      <Banner/>
      <FeaturedFoods/>
      <AboutSection/>
      <Mission/>
      <HowItWorksSection/>
      <Contact/>
    </div>
  );
};

export default Home;