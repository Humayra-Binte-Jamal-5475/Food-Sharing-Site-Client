// import Lottie from "lottie-react";
import { useEffect, useState } from "react";
// import banner1 from "../assets/banner1.json";
// import banner2 from "../assets/banner2.json";
// import banner3 from "../assets/banner3.json";
// import banner4 from "../assets/banner4.json";

const Banner = () => {
//   const animations = [banner1, banner2, banner3, banner4];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % animations.length);
//     }, 2500); // Change animation every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="bg-blue-50 flex flex-col md:flex-row items-center justify-between my-10 p-10 rounded-lg shadow-md transition-all">
      
      {/* <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Join HobbyHub</h1>
        <p className="text-lg text-gray-700 mb-4">
          Connect with people who share your passion.
        </p>
        <button className="btn btn-primary rounded-3xl">Get Started</button>
      </div>

      {/* Lottie Carousel */}
      {/* <div className="md:w-1/2">
        <Lottie
          animationData={animations[currentIndex]}
          loop={true}
          className="w-full h-auto"
        />
      </div>  */}
    </div>
  );
};

export default Banner;


