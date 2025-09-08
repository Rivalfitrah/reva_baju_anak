import React, { useEffect, useState, useCallback } from "react";
import { getprodukById, getImageUrl, getUlasanByProdukId, addToCart } from "../../service/api";
import { useParams } from "react-router-dom";
import Komentar from "../komentar/Komentar";
import ReviewInput from "../komentar/ReviewInput";
import Swal from "sweetalert2";

function Detail({ children }) {
  const PLACEHOLDER_IMAGE = "https://marketplace.apg-wi.com/imgs/media.images/75035/75035.widea.jpg";

  const { id } = useParams();
  const [produk, setProduk] = useState({});
  const [loadingProduk, setLoadingProduk] = useState(true);
  const [selectedUkuran, setSelectedUkuran] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [tampilkanSemua, setTampilkanSemua] = useState(false);
  const [komentarDataState, setKomentarDataState] = useState([]);
  const [loadingUlasan, setLoadingUlasan] = useState(true);
  const [rataRating, setRataRating] = useState(0);

  const fetchUlasan = useCallback(async (produkId) => {
    if (!produkId) return;
    setLoadingUlasan(true);
    try {
      const response = await getUlasanByProdukId(produkId);
      if (response && response.data) {
        const ulasanDiformat = response.data.map(item => ({
          id: item.id,
          nama: item.user ? item.user.nama : "Anonim",
          isi: item.komentar,
          rating: item.rating,
          created_at: item.created_at
        }));
        setKomentarDataState(ulasanDiformat);
        const totalRating = ulasanDiformat.reduce((acc, curr) => acc + curr.rating, 0);
        setRataRating((totalRating / ulasanDiformat.length).toFixed(1));
      } else {
        setKomentarDataState([]);
        setRataRating(0);
      }
    } catch (error) {
      console.error("Error fetching ulasan:", error);
      setKomentarDataState([]);
      setRataRating(0);
    } finally {
      setLoadingUlasan(false);
    }
  }, []);

  const handleReviewSubmitted = () => {
    if (produk && produk.id) {
      fetchUlasan(produk.id);
    }
  };

  useEffect(() => {
    const fetchproduk = async () => {
      try {
        const response = await getprodukById(id);
        const data = response.data;
        setProduk(data);
        setMainImage(data.images?.[0] || data.image);
        fetchUlasan(data.id);
        setLoadingProduk(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoadingProduk(false);
      }
    };
    fetchproduk();
  }, [id, fetchUlasan]);

  // Mendapatkan stok maksimum untuk ukuran yang dipilih
  const getMaxStok = () => {
    if (!produk.ukurans || !selectedUkuran) return null;
    const ukuranObj = produk.ukurans.find((u) => u.nama === selectedUkuran);
    return ukuranObj ? ukuranObj.stok : null;
  };

  const handleIncrease = () => {
    const maxStok = getMaxStok();
    if (maxStok !== null && quantity >= maxStok) return;
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => { if (quantity > 1) setQuantity((prev) => prev - 1); };
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const maxStok = getMaxStok();
    if (!isNaN(value) && value > 0) {
      if (maxStok !== null && value > maxStok) {
        setQuantity(maxStok);
      } else {
        setQuantity(value);
      }
    } else {
      setQuantity(1);
    }
  };
  const handleBlur = (e) => {
    const value = parseInt(e.target.value, 10);
    const maxStok = getMaxStok();
    if (isNaN(value) || value < 1) setQuantity(1);
    else if (maxStok !== null && value > maxStok) setQuantity(maxStok);
  };

  const handleAddToCart = async () => {
    try {
      const ukuranObj = produk.ukurans.find((u) => u.nama === selectedUkuran);
      if (!ukuranObj) {
        Swal.fire({ icon: "error", title: "Ukuran tidak dipilih", text: "Silakan pilih ukuran produk terlebih dahulu." });
        return;
      }
      if (quantity > ukuranObj.stok) {
        Swal.fire({ icon: "error", title: "Stok tidak cukup", text: `Stok tersedia hanya ${ukuranObj.stok}.` });
        setQuantity(ukuranObj.stok);
        return;
      }
      await addToCart(produk.id, quantity, ukuranObj.id);
      Swal.fire({ icon: "success", title: "Berhasil", text: "Produk berhasil ditambahkan ke keranjang." });
    } catch (err) {
      Swal.fire({ icon: "error", title: "Gagal menambahkan ke keranjang", text: "Silakan coba lagi." });
    }
  };

  const renderStars = (ratingValue) => {
    const fullStars = Math.floor(ratingValue);
    const halfStar = ratingValue % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (<>{'★'.repeat(fullStars)}{halfStar && '☆'}{'☆'.repeat(emptyStars)}</>);
  };

  if (loadingProduk) return <div className="text-center py-10">Loading...</div>;
  if (!produk) return <div className="text-center py-10">Produk tidak ditemukan</div>;

  return (
    <main className="container mx-auto max-w-7xl px-4 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-24">
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/product" className="hover:text-gray-700">Produk</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{produk.nama_produk}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={getImageUrl(mainImage)}
              alt={produk.nama_produk}
              className="w-90 h-90 object-cover rounded-lg shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMAGE; }}
            />
            <div className="flex space-x-2 mt-4">
              {produk.images?.slice(0, 3).map((imgPath, index) => (
                <img
                  key={index}
                  src={getImageUrl(imgPath)}
                  onClick={() => setMainImage(imgPath)}
                  className={`w-16 h-16 rounded-lg border cursor-pointer ${mainImage === imgPath ? "ring-2 ring-pink-400" : ""}`}
                  alt={`Sub gambar ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{produk.nama_produk}</h2>
            <p className="text-sm text-gray-500 mt-2">harga</p>
            <p className="text-lg text-gray-700 font-semibold mt-2">
              {typeof produk.harga === 'number' ? `Rp ${produk.harga.toLocaleString('id-ID')}` : produk.harga || "Rp 0"}
            </p>

            <div className="mt-4">
              <p className="text-sm text-gray-600">Size</p>
              <p className="text-sm text-gray-600">
                Stok tersedia: {produk.ukurans?.find((ukuran) => ukuran.nama === selectedUkuran)?.stok ?? "Pilih ukuran"}
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
                <button onClick={handleDecrease} className="px-3 py-[2px] bg-gray-200 hover:bg-gray-300 text-lg rounded-lg">-</button>
                <input
                  type="number"
                  className="w-16 text-center border border-gray-300 rounded-lg h-8"
                  value={quantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min={1}
                />
                <button onClick={handleIncrease} className="px-3 py-[2px] bg-gray-200 hover:bg-gray-300 text-lg rounded-lg">+</button>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="w-full bg-pink-400 text-white py-3 rounded-lg shadow-lg hover:bg-pink-500" onClick={handleAddToCart}>
                Masukan ke keranjang
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-xl font-bold">Details</h2>
        <p className="text-gray-700 mt-2">{produk.deskripsi}</p>

        <div className="mt-10">
          <h2 className="text-xl font-bold">Reviews</h2>
          <div className="flex items-center mt-4">
            <div className="text-4xl font-bold">{loadingUlasan ? "-" : rataRating}</div>
            <div className="ml-4">
              <p className="text-gray-600">
                {loadingUlasan ? "Loading reviews..." : `of ${komentarDataState.length} reviews`}
              </p>
              {!loadingUlasan && komentarDataState.length > 0 && (
                <span className="text-yellow-500">{renderStars(parseFloat(rataRating))}</span>
              )}
              {!loadingUlasan && komentarDataState.length === 0 && (
                <span className="text-gray-400">No reviews yet</span>
              )}
            </div>
          </div>

          {produk && produk.id && (
            <ReviewInput produkId={produk.id} onReviewSubmitted={handleReviewSubmitted} />
          )}

          {loadingUlasan ? (
            <p className="text-center py-5">Loading reviews...</p>
          ) : (
            <Komentar tampilkanSemua={tampilkanSemua} komentarData={komentarDataState} />
          )}

          {!loadingUlasan && komentarDataState.length > 3 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setTampilkanSemua(!tampilkanSemua)}
                className="bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-500 mt-4"
              >
                {tampilkanSemua ? "Tutup Komentar" : "Lihat Selengkapnya"}
              </button>
            </div>
          )}

          {!loadingUlasan && komentarDataState.length === 0 && (
            <p className="text-center py-5 text-gray-500">Belum ada ulasan untuk produk ini.</p>
          )}
        </div>
      </div>

      <section className="mt-8">
        <h3 className="text-xl font-semibold">Produk Terkait</h3>
        <div className="mt-4">{children}</div>
      </section>
    </main>
  );
}

export default Detail;
