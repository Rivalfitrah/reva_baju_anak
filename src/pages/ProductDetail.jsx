import React from "react";
import Detail from "../components/product/Detail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/product/Card";

function ProductDetail() {
  return (
    <div>
      <Navbar />
      <Detail>
        <Card jumlah={4} isi={4} />
      </Detail>
      <Footer />
    </div>
  );
}

export default ProductDetail;
