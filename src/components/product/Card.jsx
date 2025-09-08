import { ShoppingCart } from "lucide-react";
import React from "react";
import { useEffect, useState, } from "react";
import Pagination from "./Pagination";
import { getProduks, getImageUrl } from "../../service/api";
import { useNavigate } from "react-router-dom";


function Card({ filters = { kategori: "semua", ukuran: [] }, judul, jumlah, isi, pagination = false }) {
  const [produk, setProduk] = useState([]);  // Inisialisasi sebagai array kosong
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

// Pastikan filters memiliki struktur yang diharapkan
const safeFilters = filters || { kategori: "semua", ukuran: []};

// filtering berdasarkan filters
const filteredProduk = safeData.filter((item) => {
  const matchKategori =
    !safeFilters.kategori || safeFilters.kategori === "semua" ||
    item.kategori?.toLowerCase() === safeFilters.kategori.toLowerCase();

const matchUkuran =
  !safeFilters.ukuran || safeFilters.ukuran.length === 0 ||
  item.ukurans?.some((ukuran) =>
    safeFilters.ukuran.map(u => u.toLowerCase()).includes(ukuran.nama.toLowerCase())
  );


  const hasStock =
    Array.isArray(item.ukurans) && item.ukurans.some((ukuran) => ukuran.stok > 0);

  return matchKategori && matchUkuran && hasStock;
});


const totalPages = Math.ceil(filteredProduk.length / itemsPerPage);
const displayedProduk = pagination
  ? filteredProduk.slice(startIndex, endIndex)
  : filteredProduk.slice(0, jumlah);


  // Fungsi untuk membangun URL gambar

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
              onClick={()=> navigate(`/detail/${products.id}`)}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="p-4">
                <img
                  src={products.fullImageUrl || getImageUrl(products.image)}
                  alt={products.nama_produk || "Product"}
                  className="w-full h-36 sm:h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = PLACEHOLDER_IMAGE;
                  }}
                />
              </div>

              <div className="p-4 flex flex-col justify-between h-[100px]">
                <div
                  key={index}
                  className="text-lg font-semibold text-gray-800 line-clamp-2 cursor-pointer"
                >
                  {products.nama_produk || "Produk"}
                </div>
                <span className="text-base font-bold text-gray-900 pt-5">
                  {typeof products.harga === 'number' 
                    ? `Rp ${products.harga.toLocaleString('id-ID')}` 
                    : products.harga || "Rp 0"}
                </span>
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