import React from "react";
import { UserCircle, ChevronDown} from "lucide-react"; // Ikon dari Lucide React
import { NavLink } from "react-router";

function Sidebarpage({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-white p-6">
        {/* Judul Profil */}
        <h2 className="text-xl font-semibold mb-4">Reva Baju Anak</h2>

        {/* Garis Pembatas */}
        <hr className="mb-4" />

        {/* Menu Navigasi */}
        <ul>
        <li className="rounded">
        
            <NavLink to="/profil" className="nav-link">
              Profil
            </NavLink>
          </li>
          <li className="rounded">

            <NavLink to="/history" className="nav-link">History</NavLink>
          </li>
          <li className="rounded">
            <NavLink to="/" className="nav-link">Product</NavLink>
          </li>
        </ul>
      </div>

      {/* Konten */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-6 shadow-md">
          {/* Judul */}
          <h1 className="text-2xl font-bold text-gray-800">Profil User</h1>

          {/* Foto Profil & Dropdown */}
          <div className="relative flex items-center cursor-pointer">
            <UserCircle className="w-8 h-8 text-gray-700 mr-2" />
            <span className="text-gray-700 font-medium">John Doe</span>
            <ChevronDown className="w-5 h-5 text-gray-700 ml-2" />
          </div>
        </header>

        {/* Isi Konten */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default Sidebarpage;
