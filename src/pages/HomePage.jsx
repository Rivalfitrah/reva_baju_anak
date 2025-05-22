import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Card from "../components/product/Card";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection
        imagesrc="/images/Group 2.svg"
        posisi="bottom-[10px] md:bottom-6 lg:bottom-4"
        showbutton={false}
      />
      <Card judul="Produk Terbaru" jumlah={4} isi={4} />
      <HeroSection imagesrc="/images/banner1.png" showbutton={false} />
      <div className="pt-10 md:pt-25">
        <Card judul="Rekomendasi Produk" jumlah={12} isi={4} />
      </div>
      <br />
      <Footer />
    </>
  );
}

export default HomePage;
