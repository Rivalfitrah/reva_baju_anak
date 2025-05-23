import React, { useState, useEffect } from "react";
import { Menu, X, Filter, ChevronDown, ChevronUp, Check } from "lucide-react";

function SelectKategori({ filters = { kategori: "semua", ukuran: [], harga: "all" }, setFilters = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    kategori: true,
    ukuran: true,
  });

  const kategori = [
    { value: "semua", label: "Semua Kategori" },
    { value: "Baju", label: "Baju" },
    { value: "Celana", label: "Celana" },
    { value: "Jaket", label: "Jaket" },
    { value: "Baju bayi", label: "Baju Bayi" },
  ];

  const ukuran = ["XS","S", "M", "L", "XL", "All Size"];

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategorySelect = (value) => {
    if (typeof setFilters === "function") {
      setFilters((prev) => ({ ...prev, kategori: value }));
    } else {
      console.warn("setFilters is not a function");
    }
  };

  const handleSizeSelect = (size) => {
    setFilters((prev) => {
      if (!prev || !prev.ukuran) {
        return { ...prev, ukuran: size === "All Size" ? [] : [size] };
      }
      if (size === "All Size") {
        return { ...prev, ukuran: [] };
      }
      const newSizes = prev.ukuran.includes(size)
        ? prev.ukuran.filter((s) => s !== size)
        : [...prev.ukuran, size];
      return { ...prev, ukuran: newSizes };
    });
  };

  const handlePriceSelect = (value) => {
    setFilters(prev => ({ ...prev, harga: value }));
  };

  const resetFilters = () => {
    setFilters({
      kategori: "semua",
      ukuran: [],
      harga: "all"
    });
  };

  return (
    <div className="relative">
      {/* Mobile filter button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-between w-full p-3 bg-pink-500 text-white rounded-md mb-4"
      >
        <div className="flex items-center">
          <Filter size={18} className="mr-2" />
          <span>Filter Produk</span>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && mobileView && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Filter sidebar */}
      <div
        className={`bg-white rounded-lg shadow-sm ${mobileView ? 
          `fixed inset-y-0 left-0 w-72 h-screen overflow-y-auto z-50 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out` : 
          "w-full"}`}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Filter Produk</h2>
            {mobileView && (
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            )}
          </div>

          {/* Reset button */}
          <button
            onClick={resetFilters}
            className="text-pink-500 text-sm font-medium mb-4 hover:text-pink-700"
          >
            Reset Semua Filter
          </button>

          {/* Kategori section */}
          <div className="mb-6">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("kategori")}
            >
              <h3 className="font-semibold text-gray-700">Kategori</h3>
              {expandedSections.kategori ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            
            {expandedSections.kategori && (
              <div className="mt-2 space-y-1">
                {kategori.map((item) => (
                  <label
                    key={item.value}
                    className={`flex items-center w-full text-left py-2 px-3 rounded-md cursor-pointer ${
                      filters.kategori === item.value
                        ? "bg-pink-100 text-pink-600"
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="kategori"
                      value={item.value}
                      checked={filters.kategori === item.value}
                      onChange={() => handleCategorySelect(item.value)}
                      className="hidden"
                    />
                    {filters.kategori === item.value && <Check size={16} className="mr-2" />}
                    {item.label}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Ukuran section */}
          <div className="mb-6">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("ukuran")}
            >
              <h3 className="font-semibold text-gray-700">Ukuran</h3>
              {expandedSections.ukuran ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            
            {expandedSections.ukuran && (
              <div className="mt-2 flex flex-wrap gap-2">
                {ukuran.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      (size === "All Size" && filters.ukuran.length === 0) || 
                      filters.ukuran.includes(size)
                        ? "bg-pink-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Apply button for mobile */}
          {mobileView && (
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2 bg-pink-500 text-white rounded-md mt-4 hover:bg-pink-600"
            >
              Terapkan Filter
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectKategori;