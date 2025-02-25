import React from "react";

const HeroSection = () => {
  return (
    <>
        <div className="relative flex justify-center">
        {/* SVG sebagai latar belakang */}
        <img className="w-[80%]" src="/images/Group 2.svg" alt="" />

        {/* Tombol di atas SVG */}
        <button className="absolute bottom-10 bg-gradient-to-b from-[#FFE6C9] to-[#FFA09B] text-black font-semibold py-2 px-4 rounded-md shadow-md hover:scale-105 transition-transform mb-15">
            Belanja sekarang
        </button>
        </div>
    </>
  );
};

export default HeroSection;
