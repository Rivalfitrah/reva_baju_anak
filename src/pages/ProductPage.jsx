import React from "react";
import Navbar from "../components/Navbar";
import SelectKategori from "../components/SelectKategori";
import Card from "../components/Card";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="pt-30 container mx-auto max-w-7xl px-4">
        {/* Layout Sidebar + Produk */}
        <div className="flex gap-8">
          {/* Sidebar Kategori */}
          <SelectKategori />

          {/* Produk */}
          <div className="flex-1">
            <Card judul="Produk" jumlah={6} isi={3} />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default ProductPage;
