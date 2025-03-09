import React, { useState } from "react";

function SelectKategori() {
  const kategori = [
    { value: "Baju", label: "Baju" },
    { value: "Celana", label: "Celana" },
    { value: "Sepatu", label: "Sepatu" },
    { value: "Tas", label: "Tas" },
    { value: "Jaket", label: "Jaket" },
    { value: "Baju bayi", label: "Baju Bayi" },
  ];

  const gender = ["Laki-laki", "Perempuan"];
  const ukuran = ["S", "M", "L", "XL", "XXL"];

  const [selectedCategory, setSelectedCategory] = useState("Baju");

  return (
    <div className="w-64 border-r p-4">
      <h2 className="text-lg font-semibold mb-4">Kategori</h2>

      {/* Kategori */}
      <div className="space-y-2">
        {kategori.map((item) => (
          <button
            key={item.value}
            onClick={() => setSelectedCategory(item.value)}
            className={`block w-full text-left py-2 px-3 rounded-md ${
              selectedCategory === item.value
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Jenis Kelamin */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Jenis Kelamin</h2>
      <div className="space-y-2">
        {gender.map((g) => (
          <button
            key={g}
            className="block w-full text-left py-2 px-3 bg-gray-200 rounded-md hover:bg-pink-500 hover:text-white"
          >
            {selectedCategory} {g}
          </button>
        ))}
      </div>

      {/* Ukuran */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Ukuran</h2>
      <div className="flex flex-wrap gap-2">
        {ukuran.map((u) => (
          <button
            key={u}
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-pink-500 hover:text-white"
          >
            {u}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectKategori;
