import React from "react";

const HeroSection = ({ imagesrc, posisi, showbutton = true }) => {
  return (
    <div className="relative flex justify-center mt-[80px] md:mt-[100px]">
      {/* SVG sebagai latar belakang */}
      <img className="w-full max-w-[80%] md:max-w-[80%]" src={imagesrc} alt="Banner" />

      {/* Tombol dengan posisi yang bisa diubah */}
      {showbutton && (
        <button className={`absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFE6C9] to-[#FFA09B] text-black font-semibold py-2 px-4 rounded-md shadow-md hover:scale-105 transition-transform ${posisi}`}>
          Belanja Sekarang
        </button>
      )}
    </div>
  );
};

export default HeroSection;
