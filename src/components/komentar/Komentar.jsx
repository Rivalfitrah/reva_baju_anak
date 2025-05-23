// File: Komentar.jsx
import React from 'react';

// Ganti nama fungsi agar konsisten dengan penamaan komponen React (PascalCase)
function Komentar({ tampilkanSemua, komentarData }) { //
  const komentarDitampilkan = tampilkanSemua
    ? komentarData
    : komentarData.slice(0, 3); //

  if (!komentarData || komentarData.length === 0) {
    return <p className="mt-6 text-gray-500">Belum ada ulasan untuk produk ini.</p>;
  }

  return (
    <>
      {komentarDitampilkan.map((komentar, index) => ( //
        // Pastikan 'komentar' memiliki properti 'nama', 'isi', dan 'rating'
        <div key={index} className="mt-6 p-4 bg-gray-50 shadow-md rounded-lg"> {/* Sedikit perubahan margin dari file Anda /} {/ */}
          <p className="font-semibold">{komentar.nama || "Anonim"}</p> {/* Fallback jika nama tidak ada /} {/ */}
          <p className="text-gray-600">{komentar.isi}</p> {/* */}
          {typeof komentar.rating === 'number' && komentar.rating > 0 && ( //
            <span className="text-yellow-500"> {/* */}
              {"★".repeat(komentar.rating)}{"☆".repeat(5 - komentar.rating)} {/* */}
            </span>
          )}
        </div>
      ))}
    </>
  );
}

// Ganti nama export agar konsisten
export default Komentar;