// File: ReviewInput.jsx
import React, { useState } from 'react'; // React sudah diimpor di file Anda
import Swal from 'sweetalert2';
import { postulasan } from '../../service/api'; // Sesuaikan path ke file api.js Anda

function ReviewInput({ produkId, onReviewSubmitted }) { // Tambahkan produkId dan onReviewSubmitted
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ulasan, setUlasan] = useState("");

  const handleSubmit = async () => { // Ubah menjadi async
    if (rating === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Rating Diperlukan',
        text: 'Mohon beri rating bintang terlebih dahulu.',
      });
      return;
    }
    if (ulasan.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Ulasan Kosong',
        text: 'Mohon isi ulasan Anda.',
      });
      return;
    }

    try {
      // Panggil API postUlasan
      const response = await postulasan(produkId, rating, ulasan);
      
      Swal.fire({
        icon: 'success',
        title: 'Ulasan Terkirim!',
        text: 'Terima kasih atas ulasan Anda.',
      });

      // Panggil callback untuk memberitahu parent bahwa ulasan baru telah ditambahkan
      if (onReviewSubmitted) {
        // Anda mungkin ingin mengirim data ulasan yang baru saja berhasil disimpan
        // Untuk saat ini, kita asumsikan API tidak mengembalikan data ulasan lengkap dengan nama pengguna,
        // jadi kita buat objek sementara. Idealnya, backend mengembalikan objek ulasan yang baru dibuat.
        const newReviewData = {
          nama: "Pengguna Anda", // Anda mungkin perlu mendapatkan nama pengguna yang login
          isi: ulasan,
          rating: rating,
          // tambahkan properti lain jika API mengembalikannya atau jika dibutuhkan oleh Komentar.jsx
        };
        onReviewSubmitted(newReviewData);
      }

      // Reset form
      setRating(0);
      setHoverRating(0);
      setUlasan("");

    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal Mengirim Ulasan',
        text: error.response?.data?.message || 'Anda belum membeli barang. Silakan membeli terlebih dahulu.',
      });
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Tulis Ulasan Anda</h3>
      <div className="flex space-x-1 mb-2">
        {[1, 2, 3, 4, 5].map((bintang) => (
          <span
            key={bintang}
            className={`cursor-pointer text-2xl ${
              (hoverRating || rating) >= bintang ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(bintang)}
            onMouseEnter={() => setHoverRating(bintang)}
            onMouseLeave={() => setHoverRating(0)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
        placeholder="Tulis ulasan Anda di sini..."
        value={ulasan}
        onChange={(e) => setUlasan(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        className="mt-2 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600" // sedikit perubahan style dari file Anda
      >
        Kirim Ulasan
      </button>
    </div>
  );
}

export default ReviewInput;