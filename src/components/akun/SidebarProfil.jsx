import React from "react";
import {User,History,Store,} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { getImageUrl, getUserLogin } from "../../service/api";
import { useEffect, useState } from "react";


function SidebarProfile() {
  const [userData, setUserData] = useState(null);
  const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await getUserLogin();
        const user = response.data;
        setUserData(user);
      } catch (error) {
        console.error("Gagal mengambil data user:", error);
      }
    }
    fetchdata();
  }, []);
  return (
    <aside className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg w-full max-w-sm">
      {/* Profil Pengguna */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="relative">
        <img
          className="h-20 w-20 rounded-full object-cover shadow-md border-4 border-white"
          src={userData ? getImageUrl(userData.img) : placeholderImage}
          alt="User profile"
        />
          <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-400 border-2 border-white rounded-full" />
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900">{userData?.nama || "User"}</p>
          <p className="text-gray-500">Selamat datang kembali!</p>
        </div>
      </div>

      {/* Navigasi Sidebar */}
      <nav className="space-y-4">
      <NavLink
        to="/profil"
        className={({ isActive }) =>
          `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive
              ? "bg-pink-500 text-white shadow-md "
              : "bg-gray-100 text-gray-800 hover:bg-blue-100 hover:shadow-md"
          }`
        }
      >
{({ isActive }) => (
    <>
      <FontAwesomeIcon
        icon={faUser}
        className={`mr-3 w-5 h-5 transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-pink-500'
        }`}
      />
      <span className="font-medium">Profil</span>
    </>
  )}
      </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-pink-500 text-white shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-blue-100 hover:shadow-md"
            }`
          }
        >
        {({ isActive }) => (
          <>
            <History
              className={`mr-3 w-5 h-5 transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-pink-500'
              }`}
            />
            <span className="font-medium">Riwayat Pembelian</span>
          </>
        )}
        </NavLink>

        <hr className="border-gray-200 my-4" />
      </nav>
    </aside>
  );
}

export default SidebarProfile;
