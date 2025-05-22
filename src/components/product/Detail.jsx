import React, { useEffect, useState } from "react";
import { getprodukById, getImageUrl } from "../../service/api";
import { useParams } from "react-router-dom";
import { addToCart } from "../../service/api";
import Komentar from "../komentar/Komentar";
import ReviewInput from "../komentar/ReviewInput";
import Swal from "sweetalert2";

function Detail({children}) {
  const PLACEHOLDER_IMAGE = "https://marketplace.apg-wi.com/imgs/media.images/75035/75035.widea.jpg";

  const {id} = useParams();
  const [produk, setProduk] = useState({});
  const [loading, setLoading] = useState(true); 
  const [selectedUkuran, setSelectedUkuran] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // komentar
  const [tampilkanSemua, setTampilkanSemua] = useState(false);

  const komentarData = [
  { nama: "John Doe", isi: "Produk sangat bagus, bahan nyaman.", rating: 5 },
  { nama: "Rina", isi: "Produknya lengkap dan bagus.", rating: 5 },
  { nama: "Fitri", isi: "Anak-anak suka sekali belanja disini", rating: 5 },
  { nama: "Dina", isi: "Pengiriman cepat dan aman.", rating: 4 },
];



  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

const handleDecrease = () => {
  if (quantity > 1) { 
    setQuantity((prev) => prev - 1);
  }
};
const handleChange = (e) => {
  const value = parseInt(e.target.value, 10);
  if (!isNaN(value) && value > 0) {
    setQuantity(value);
  } else {
    setQuantity(1); // Set ke 1 jika input tidak valid
  }
};

const handleBlur = (e) => {
  const value = parseInt(e.target.value, 10);
  if (isNaN(value) || value < 1) {
    setQuantity(1); // Set ke 1 jika input tidak valid
  }
};

const handleAddToCart = async () => {
  try {
    const ukuranObj = produk.ukurans.find((u) => u.nama === selectedUkuran);
    if (!ukuranObj) {
      Swal.fire({
        icon: "error",
        title: "Ukuran tidak dipilih",
        text: "Silakan pilih ukuran produk terlebih dahulu.",
      })
      return;
    }

    const token = localStorage.getItem("token"); // atau dari context/auth kamu
    await addToCart(
      produk.id,
      quantity,
      ukuranObj.id,
    );

    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Produk berhasil ditambahkan ke keranjang.",
    })
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Gagal menambahkan ke keranjang",
      text: "Silakan coba lagi.",
    })
  }
};

useEffect(() => {
  const fetchproduk = async () => {
    try {
      const response = await getprodukById(id);
      setProduk(response.data); // ambil langsung objek produk di dalamnya
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
                
                <p className="text-sm text-gray-600">
                  Stok tersedia: {
                    produk.ukurans?.find((ukuran) => ukuran.nama === selectedUkuran)?.stok ?? "Pilih ukuran"
                  }
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {produk.ukurans && produk.ukurans.length > 0 ? (
                    produk.ukurans.map((ukuran) => (
                      <label
                        key={ukuran.id}
                        className={`px-4 py-2 rounded-lg shadow cursor-pointer ${
                          ukuran.stok > 0
                            ? selectedUkuran === ukuran.nama
                              ? "bg-pink-500 text-white"
                              : "bg-pink-300 text-white hover:text-pink-500"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <input
                          type="radio"
                          name="ukuran"
                          value={ukuran.nama}
                          disabled={ukuran.stok === 0}
                          className="hidden"
                          onChange={() => setSelectedUkuran(ukuran.nama)}
                        />
                        {ukuran.nama}
                      </label>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">Ukuran tidak tersedia</p>
                  )}
                </div>

                <div className="flex items-center space-x-2 mt-5">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-[2px] bg-gray-200 hover:bg-gray-300 text-lg rounded-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-16 text-center border border-gray-300 rounded-lg h-8"
                    value={quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    min={1}
                  />
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-[2px] bg-gray-200 hover:bg-gray-300 text-lg rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* <!-- Tombol --> */}
              <div className="mt-6 flex space-x-4">
                <button className="w-full bg-pink-400 text-white py-3 rounded-lg shadow-lg hover:bg-pink-500" onClick={handleAddToCart}>
                  Masukan ke keranjang
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

            {/* input reviews */}
            <ReviewInput />

            {/* <!-- Bar Review --> */}
            {/* <div className="mt-4 space-y-2">
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
            </div> */}

            {/* <!-- Komentar --> */}
            <Komentar tampilkanSemua={tampilkanSemua} komentarData={komentarData} />


            <div class="mt-6 text-center">
              <button
                onClick={() => setTampilkanSemua(!tampilkanSemua)}
                className="bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-500 mt-4"
              >
                {tampilkanSemua ? "Tutup Komentar" : "Lihat Selengkapnya"}
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
