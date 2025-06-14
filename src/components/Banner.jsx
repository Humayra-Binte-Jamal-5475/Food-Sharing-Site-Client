import { motion } from "motion";
import img1 from "../assets/banner-img1.jpg"; // replace with actual image paths
import img2 from "../assets/banner-img2.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-white py-10 px-6 rounded-xl shadow-md flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Share{" "}
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              color: ["#16a34a", "#22c55e", "#16a34a"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            Food
          </motion.span>{" "}
          , Spread Joy
        </h1>
        <p className="text-gray-600 mb-6">
          Join a caring community by donating extra food to people in need around you.
        </p>
        <button className="btn btn-success text-white px-6 rounded-full">Get Started</button>
      </div>

      {/* Bouncing Images */}
      <div className="md:w-1/2 flex items-center justify-center gap-4">
        <motion.img
          src={img1}
          alt="Sharing food"
          className="w-40 h-40 rounded-xl shadow-md object-cover"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={img2}
          alt="Receiving food"
          className="w-40 h-40 rounded-xl shadow-md object-cover"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;




