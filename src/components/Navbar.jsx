import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../app.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img onClick={()=> window.location.href="/"} src="/images/logo.png" alt="Logo" className="w-20 h-20 cursor-pointer" />
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
            </div>

            {/* Search, Cart, dan Login tetap terlihat di mobile */}
            <div className="flex items-center space-x-2">
              <div className="relative w-full max-w-md hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-jambu focus:border-transparent"
                />
              </div>
              <button onClick={() => (window.location.href = "/keranjang")}>
                <ShoppingCart size={30} />
              </button>
              <button
                className="text-lg font-semibold border-2 border-jambu p-2 cursor-pointer rounded-lg"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </button>

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
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-slate-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-jambu focus:border-transparent"
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
