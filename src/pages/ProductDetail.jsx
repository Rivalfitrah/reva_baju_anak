import React from "react";
import Detail from "../components/product/Detail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/product/Card";

function ProductDetail() {
  console.log("Rendering ProductDetail page");
  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Detail>
          <Card judul="Produk Terkait" jumlah={4} isi={4} />
        </Detail>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;