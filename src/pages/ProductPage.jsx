import React from "react";
import Navbar from "../components/Navbar";
import SelectKategori from "../components/SelectKategori";
import Card from "../components/product/Card";
import Footer from "../components/Footer";
import Pagination from "../components/product/Pagination";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="pt-30 container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          <div className="order-1 md:order-none">
            <SelectKategori />
          </div>
          <div className="order-2 md:order-none">
            {/* Tambahkan prop pagination */}
            <Card judul="Produk" jumlah={6} isi={3} pagination={true} />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default ProductPage;
