import React from "react";

const HeroSection = ({ imagesrc, posisi }) => {
  return (
    <div className="relative flex justify-center">
      {/* SVG sebagai latar belakang */}
      <img className="w-[80%]" src={imagesrc} alt="Banner" />

      {/* Tombol dengan posisi yang bisa diubah */}
      <button className={`absolute bottom-10 bg-gradient-to-b from-[#FFE6C9] to-[#FFA09B] text-black font-semibold py-2 px-4 rounded-md shadow-md hover:scale-105 transition-transform ${posisi}`}>
        Belanja Sekarang
      </button>
    </div>
  );
};

export default HeroSection;
