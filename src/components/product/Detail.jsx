import React, { useEffect } from "react";
import { getprodukById, getImageUrl } from "../../service/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { get } from "react-hook-form";

function Detail({children}) {
  const PLACEHOLDER_IMAGE = "https://marketplace.apg-wi.com/imgs/media.images/75035/75035.widea.jpg";

  const {id} = useParams();
  const [produk, setProduk] = useState({});
  const [loading, setLoading] = useState(true); 

useEffect(() => {
  const fetchproduk = async () => {
    try {
      const response = await getprodukById(id);
      setProduk(response.product); // ambil langsung objek produk di dalamnya
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };
  fetchproduk();
}, [id]);


  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  if (!produk) {
    return <div className="text-center py-10">Produk tidak ditemukan</div>;
  }


  return (
    <>
      <main className="container mx-auto max-w-7xl px-4 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-24">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/product" className="hover:text-gray-700">
              Produk 
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{produk.nama_produk}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Gambar Produk --> */}
            <div>
              <img
                src={getImageUrl(produk.image)}
                alt={produk.nama_produk}
                className="w-90 h-90 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = PLACEHOLDER_IMAGE;
                }}
              />
              <div className="flex space-x-2 mt-4">
                <img
                  src="image.png"
                  className="w-16 h-16 rounded-lg border cursor-pointer"
                />
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              </div>
            </div>

            {/* <!-- Deskripsi Produk --> */}
            <div>
              <h2 className="text-2xl font-bold">{produk.nama_produk}</h2>
              <p className="text-sm text-gray-500 mt-2">harga</p>
              <p className="text-lg text-gray-700 font-semibold mt-2">
                    {typeof produk.harga === 'number'
                    ? `Rp ${produk.harga.toLocaleString('id-ID')}`
                    : produk.harga || "Rp 0"}
              </p>

              {/* <!-- Ukuran --> */}
              <div className="mt-4">
                <p className="text-sm text-gray-600">Size</p>
                <p className="text-sm text-gray-600">{produk.tag}</p>
                <div className="flex space-x-2 mt-1">
                  <button className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:text-pink-500">
                    XS
                  </button>
                  <button className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:text-pink-500">
                    S
                  </button>
                  <button className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:text-pink-500">
                    M
                  </button>
                  <button className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:text-pink-500">
                    L
                  </button>
                  <button className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:text-pink-500">
                    XL
                  </button>
                </div>
              </div>

              {/* <!-- Tombol --> */}
              <div className="mt-6 flex space-x-4">
                <button className="w-full bg-pink-400 text-white py-3 rounded-lg shadow-lg hover:bg-pink-500">
                  Beli Sekarang
                </button>
                <button className="bg-gray-200 p-3 rounded-lg shadow-lg hover:bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 6m1.6-6L5.4 5m1.6 6h10m0 0l1.6 6M7 13l-1.6 6M17 19h2m-10 0h2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* detail dan review */}
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-xl font-bold">Details</h2>
          <p className="text-gray-700 mt-2">
            {produk.deskripsi}
          </p>

          {/* <!-- Review --> */}
          <div className="mt-10">
            <h2 className="text-xl font-bold">Reviews</h2>
            <div className="flex items-center mt-4">
              <div className="text-4xl font-bold">4.8</div>
              <div className="ml-4">
                <p className="text-gray-600">of 125 reviews</p>
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </div>

            {/* <!-- Bar Review --> */}
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span>Excellent</span>
                <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{width: "100%"}}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Good</span>
                <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{width: "75%"}}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Average</span>
                <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{width: "50%"}}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Below Average</span>
                <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{width: "25%"}}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Poor</span>
                <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{width: "10%"}}
                  ></div>
                </div>
              </div>
            </div>

            {/* <!-- Komentar --> */}
            <div class="mt-10 p-4 bg-gray-50 shadow-md rounded-lg">
              <p class="font-semibold">John Doe</p>
              <p class="text-gray-600">Produk sangat bagus, bahan nyaman.</p>
              <span class="text-yellow-500">★★★★★</span>
            </div>
            <div class="mt-10 p-4 bg-gray-50 shadow-md rounded-lg">
              <p class="font-semibold">Rina</p>
              <p class="text-gray-600">Produknya lengkap dan bagus.</p>
              <span class="text-yellow-500">★★★★★</span>
            </div>
            <div class="mt-10 p-4 bg-gray-50 shadow-md rounded-lg">
              <p class="font-semibold">Fitri</p>
              <p class="text-gray-600">Anak-anak suka sekali belanja disini</p>
              <span class="text-yellow-500">★★★★★</span>
            </div>

            <div class="mt-6 text-center">
              <button class="bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-500">
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Produk Terkait --> */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold">Produk Terkait</h3>

          <div className="mt-4">
            {children}
            
          </div>
        </section>
      </main>
    </>
  );
}

export default Detail;
