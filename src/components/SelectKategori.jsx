import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Ikon untuk toggle sidebar

function SelectKategori() {
  const [isOpen, setIsOpen] = useState(false); // State untuk buka/tutup sidebar

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
    <div>
      {/* Tombol toggle untuk sidebar di mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center p-2 bg-pink-500 text-white rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
        <span className="ml-2">{isOpen ? "Tutup" : "Kategori"}</span>
      </button>

      {/* Overlay saat sidebar terbuka */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar kategori */}
      <div
        className={`fixed inset-y-0 left-0 w-64 h-screen bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:border-r p-4 pt-16 z-50 transition-transform duration-300 ease-in-out`}
      >
        {/* Tombol Close di Mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Kategori</h2>

        {/* List Kategori */}
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
    </div>
  );
}

export default SelectKategori;
