import { ShoppingCart, Search } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/images/logo-reva-baju-anak.png"
                alt="Logo"
                className="w-20 h-20"
              />
            </div>
            <div className="items-center justify-center space-x-4">
              <a href="" className="text-lg font- hover:text-[#FFA09B]">
                Home
              </a>
              <a href="" className="text-lg font- hover:text-[#FFA09B]">
                About
              </a>
              <a href="" className="text-lg font- hover:text-[#FFA09B]">
                Product
              </a>
            </div>

            <div className="flex items-center space-x-2">
              {/* search */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFA09B] focus:border-transparent"
                />
              </div>

              <button>
                <ShoppingCart size={30} />
              </button>
              <button
                href=""
                className="text-lg font-semibold border-2 border-[#FFA09B] p-2 cursor-pointer"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
