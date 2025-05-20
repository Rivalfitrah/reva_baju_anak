import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import SearchResultItem from "./input/SearchResult";
import ProfileMenu from "./akun/ProfilMenu";
import { getProduks } from "../service/api";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openmenu, setOpenMenu] = useState(false);

  // State untuk keyword pencarian
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Gunakan ini untuk hasil pencarian
  const [notfound, setNotFound] = useState(false);
  const [allProducts, setAllProducts] = useState([]); // State untuk menyimpan semua produk

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true kalau token ada
  }, []);

  // Fetch semua produk
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProduks();
        // Pastikan data adalah array produk
        if (response && response.products) {
          setAllProducts(response.products);
          console.log("Products loaded:", response.products.length);
        } else {
          console.error("Invalid product data format:", response);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchProducts();
  }, []);

  // Filter produk berdasarkan keyword
  useEffect(() => {
    if (keyword.trim() === "") {
      setSearchResults([]); // Gunakan setSearchResults, bukan setResults
      setNotFound(false);
      return;
    }

    console.log("Searching for:", keyword);
    console.log("Products available:", allProducts.length);
    
    const filtered = allProducts.filter(product =>
      // Pastikan nama_produk ada sebelum mencoba toLowerCase()
      product.nama_produk && 
      product.nama_produk.toLowerCase().includes(keyword.toLowerCase())
    );

    console.log("Search results:", filtered.length);
    
    if (filtered.length > 0) {
      setSearchResults(filtered); // Gunakan setSearchResults, bukan setResults
      setNotFound(false);
    } else {
      setSearchResults([]); // Gunakan setSearchResults, bukan setResults
      setNotFound(true);
    }
  }, [keyword, allProducts]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                onClick={() => (window.location.href = "/")}
                src="/images/logo.png"
                alt="Logo"
                className="w-20 h-20 cursor-pointer"
              />
            </div>

            {/* Menu untuk layar besar */}
            <div className="hidden md:flex items-center justify-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg text-jambu font-semibold"
                    : "text-lg hover:text-jambu"
                }
              >
                Beranda
              </NavLink>

              <NavLink
                to="https://aboutus-opal.vercel.app/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg text-jambu font-semibold"
                    : "text-lg hover:text-jambu"
                }
              >
                Tentang Kami
              </NavLink>

              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg text-jambu font-semibold"
                    : "text-lg hover:text-jambu"
                }
              >
                Produk
              </NavLink>
            </div>

            {/* Search, Cart, dan Login tetap terlihat di mobile */}
            <div className="flex items-center space-x-2">
              <div className="relative w-full max-w-md hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-jambu focus:border-transparent"
                />
                
                {keyword && (
                  <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-full z-10 max-h-64 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      searchResults.map((product) => (
                        <SearchResultItem
                          key={product.ID || `product-${Math.random()}`} // Pastikan key selalu unik
                          image={product.image}
                          name={product.nama_produk}
                          price={product.harga}
                          id={product.ID}
                        />
                      ))
                    ) : notfound ? (
                      <p className="p-4 text-center text-sm text-gray-500">Produk tidak ditemukan</p>
                    ) : null}
                  </div>
                )}
              </div>

              <button onClick={() => (window.location.href = "/keranjang")}>
                <ShoppingCart size={30} />
              </button>
              <div className="flex items-center gap-4">
                {!isLoggedIn ? (
                  // Tombol Login
                  <button
                    className="text-lg font-semibold border-2 border-jambu p-2 cursor-pointer rounded-lg"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Login
                  </button>
                ) : (
                  // Tombol Ikon User
                  <div className="relative">
                    <button onClick={() => setOpenMenu(!openmenu)}>
                      <User size={30} />
                    </button>

                    {openmenu && (
                      <ProfileMenu onClose={() => setOpenMenu(false)} />
                    )}
                  </div>
                )}
              </div>

              {/* Hamburger Menu */}
              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-6 flex flex-col items-center space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-jambu font-semibold"
                  : "text-lg hover:text-jambu"
              }
            >
              Beranda
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-jambu font-semibold"
                  : "text-lg hover:text-jambu"
              }
            >
              Tentang Kami
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-jambu font-semibold"
                  : "text-lg hover:text-jambu"
              }
            >
              Produk
            </NavLink>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-slate-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-jambu focus:border-transparent"
              />
              
              {/* Menu mobile search results */}
              {keyword && (
                <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-full z-10 max-h-64 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <SearchResultItem
                        key={product.id || `mobile-product-${Math.random()}`}
                        image={product.image}
                        name={product.nama_produk}
                        price={product.harga}
                        id={product.id}
                      />
                    ))
                  ) : notfound ? (
                    <p className="p-4 text-center text-sm text-gray-500">Produk tidak ditemukan</p>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;