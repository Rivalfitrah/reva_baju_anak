import { ShoppingCart } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";
import { getproduk } from "../../service/ApiPeoduk";
import Pagination from "./Pagination";


function Card({ judul, jumlah, isi, pagination = false }) {
  const [produk, setProduk] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Perbaiki penamaan state (currentpage -> currentPage)

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const data = await getproduk();
        setProduk(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProduk();
  }, []);

  // hitung produk yang ditampilkan
  const itemsPerPage = pagination ? jumlah : produk.length;
  const totalPages = Math.ceil(produk.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProduk = pagination 
    ? produk.slice(startIndex, endIndex)
    : produk.slice(0, jumlah);

  return (
    <div className="container mx-auto max-w-7xl px-4 min-h-[440px]">
      <h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {judul}
      </h2>
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${
          isi === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        } gap-4`}
      >
        {displayedProduk.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <img
                src={item.image}
                alt="Product"
                className="w-full h-36 sm:h-48 object-cover"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-[150px]">
              <a
                href="/detail"
                className="text-lg font-semibold text-gray-800 line-clamp-5"
              >
                {item.title}
              </a>
              <span className="text-base font-bold text-gray-900 pt-5">
                {item.price}
              </span>
              <div className="flex justify-between items-center mt-2">
                <span className="text-base">⭐4.5</span>
                <button className=" bg-gradient-to-r from-satu to-pink text-black px-5 sm:px-10 py-2 rounded-xl">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {pagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default Card;