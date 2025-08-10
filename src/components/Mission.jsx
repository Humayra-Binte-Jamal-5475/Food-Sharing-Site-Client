import React from "react";
import mission from "../assets/mission.avif";

const Mission = () => {
  return (
    <section id="mission" className="py-16 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8 px-4">
        
        {/* Image */}
        <div className="md:w-1/2 flex-shrink-0">
          <img
            src={mission}
            alt="Food Sharing"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
            style={{ minHeight: '300px' }}
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B35648] mb-4">
            Our Mission
          </h2>
          <p className="text-[#1F1F1F] text-base md:text-lg leading-relaxed">
            Our mission is to reduce food waste and fight hunger by connecting
            people with surplus food to those who need it most. Together, we are
            building a sustainable, compassionate community where every meal counts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;






