import { ShoppingCart } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { getProduks } from "../../service/api";

function Card({ judul, jumlah, isi, pagination = false }) {
  const [produk, setProduk] = useState([]);  // Inisialisasi sebagai array kosong
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Define placeholder URL as a constant for consistency
  const PLACEHOLDER_IMAGE = "https://marketplace.apg-wi.com/imgs/media.images/75035/75035.widea.jpg";

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const response = await getProduks();
        // Pastikan data adalah array
        const data = response?.products ?? [];
        setProduk(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        setProduk([]); // Pastikan tetap array kosong jika ada error
      }
    };
    fetchProduk();
  }, []);

  // Pastikan produk adalah array sebelum menggunakan slice
  const safeData = Array.isArray(produk) ? produk : [];
  
  // hitung produk yang ditampilkan
  const itemsPerPage = pagination ? jumlah : safeData.length;
  const totalPages = Math.ceil(safeData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProduk = pagination 
    ? safeData.slice(startIndex, endIndex)
    : safeData.slice(0, jumlah);

  // Fungsi untuk membangun URL gambar
  const getImageUrl = (imageFileName) => {
    if (!imageFileName) return PLACEHOLDER_IMAGE;
    return `http://localhost:8000/uploads/products/${imageFileName}/1.jpg`;
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

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
        {displayedProduk.length > 0 ? (
          displayedProduk.map((products, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <img
                  src={getImageUrl(products.image)}
                  alt={products.nama_produk || "Product"}
                  className="w-full h-36 sm:h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = PLACEHOLDER_IMAGE; // Using the same placeholder URL
                  }}
                />
              </div>

              <div className="p-4 flex flex-col justify-between h-[150px]">
                <a
                  href={`/detail/${products.id}`}
                  className="text-lg font-semibold text-gray-800 line-clamp-2"
                >
                  {products.nama_produk || "Produk"}
                </a>
                <span className="text-base font-bold text-gray-900 pt-5">
                  {typeof products.harga === 'number' 
                    ? `Rp ${products.harga.toLocaleString('id-ID')}` 
                    : products.harga || "Rp 0"}
                </span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-base">⭐4.5</span>
                  <button className="bg-gradient-to-r from-satu to-pink text-black px-5 sm:px-10 py-2 rounded-xl">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            Tidak ada produk tersedia
          </div>
        )}
      </div>
      {pagination && safeData.length > 0 && (
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