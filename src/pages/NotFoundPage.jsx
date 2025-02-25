import React from 'react'

function NotFoundPage() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Gambar 404 */}
      <img src="/images/404.png" alt="404 Not Found" className="w-80 md:w-96 lg:w-[400px]" />

      {/* Judul */}
      <h1 className="text-3xl md:text-5xl font-bold mt-6 text-gray-800">
        Oops! Halaman Tidak Ditemukan
      </h1>

      {/* Deskripsi */}
      <p className="text-gray-600 mt-3 text-lg md:text-xl">
        Halaman yang kamu cari tidak tersedia. Coba kembali ke halaman utama.
      </p>

      {/* Tombol Kembali */}
      <a href="/" className="mt-6 bg-[#FFA09B] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#E58A7B] transition duration-300">
        Kembali ke Beranda
      </a>
    </div>
  )
}

export default NotFoundPage