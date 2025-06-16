import { animate } from "motion";
import { useEffect, useRef } from "react";
import img1 from "../assets/banner-img1.jpg";
import img2 from "../assets/banner-img2.jpg";

const Banner = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

useEffect(() => {
  animate(
    img1Ref.current,
    { x: [0, 50, 0], y: [0, -50, 0] },
    {
      duration: 5,
      repeat: Infinity,
      easing: "ease-in-out",
    }
  );

  animate(
    img2Ref.current,
    { x: [0, -50, 0], y: [0, 50, 0] },
    {
      duration: 5,
      repeat: Infinity,
      easing: "ease-in-out",
    }
  );
}, []);


  return (
    <div className="bg-gradient-to-r from-green-50 to-white my-5 py-20 px-6 rounded-xl shadow-md flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Share <span className="text-green-600">Food</span>, Spread Joy
        </h1>
        <p className="text-gray-600 mb-6">
          Join a caring community by donating extra food to people in need around you.
        </p>
        <button className="btn bg-green-400 text-white px-6 rounded-full">Get Started</button>
      </div>

      {/* Images */}
      <div className="md:w-1/2 flex items-center justify-center gap-8">
        <img
          ref={img1Ref}
          src={img1}
          alt="Sharing food"
          className="w-60 h-40 rounded-xl border-4 border-white shadow-md object-cover"
        />
        <img
          ref={img2Ref}
          src={img2}
          alt="Receiving food"
          className="w-60 h-40 rounded-xl border-4 border-white shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;



