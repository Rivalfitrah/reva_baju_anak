import React from 'react'


function komentar( {tampilkanSemua, komentarData}) {
    const komentarDitampilkan = tampilkanSemua
    ? komentarData
    : komentarData.slice(0, 3);
  return (
    <>
    {komentarDitampilkan.map((komentar, index) => (
        <div key={index} className="mt-10 p-4 bg-gray-50 shadow-md rounded-lg">
            <p className="font-semibold">{komentar.nama}</p>
            <p className="text-gray-600">{komentar.isi}</p>
            <span className="text-yellow-500">
            {"★".repeat(komentar.rating)}{"☆".repeat(5 - komentar.rating)}
            </span>
        </div>
        ))}
    </>
  )
}

export default komentar