import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import ProfilModal from "../input/ProfilModal";
import { getUserLogin } from "../../service/api";
import AlamatModal from "../input/AlamatModal";

function UserProfil() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlamatModalOpen, setIsAlamatModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    kodepos: "",
    provinsi: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data user
  const fetchUserData = async () => {
    try {
      setLoading(true);

      // Gunakan fungsi getUserLogin dari service/api
      const response = await getUserLogin();

      // Respons API memiliki data user di dalam property 'data'
      const userInfo = response.data || {};

      console.log("User data fetched:", userInfo);

      // Simpan data dalam state
      setUserData(userInfo);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
      setError(
        error.message || "Gagal mengambil data user. Silakan coba lagi."
      );
      setLoading(false);
    }
  };

  // Panggil fungsi fetchUserData saat komponen dimuat
  useEffect(() => {
    fetchUserData();
  }, []);

  // Tampilkan loading state
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex-1 text-center">
        Loading...
      </div>
    );
  }

  // Tampilkan error jika ada
  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex-1 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-6 flex-1"> {/* Tambahkan container flex-col */}
      {/* Kartu Profil */}
      <div className="bg-white rounded-2xl shadow-lg p-6 relative border border-gray-200">
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute top-4 right-4 flex items-center gap-1 text-pink-600 hover:text-pink-700 transition-colors"
        >
          <Pencil className="w-4 h-4" />
          <span className="text-sm font-medium">Edit Profil</span>
        </button>

        {isModalOpen && (
          <ProfilModal
            userData={userData}
            onClose={() => setIsModalOpen(false)}
            onUserUpdate={fetchUserData}
          />
        )}

        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Informasi Profil
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Nama</p>
            <p className="text-base text-gray-900">
              {userData.nama || "Belum diisi"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
            <p className="text-base text-gray-900">
              {userData.email || "Belum diisi"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">No Telepon</p>
            <p className="text-base text-gray-900">
              {userData.telepon || "Belum diisi"}
            </p>
          </div>
        </div>
      </div>

      {/* Kartu Alamat */}
      <div className="bg-white rounded-2xl shadow-lg p-6 relative border border-gray-200">
        <button
          onClick={() => setIsAlamatModalOpen(true)}
          className="absolute top-4 right-4 flex items-center gap-1 text-pink-600 hover:text-pink-700 transition-colors"
        >
          <Pencil className="w-4 h-4" />
          <span className="text-sm font-medium">Edit Alamat</span>
        </button>

        {isAlamatModalOpen && (
          <AlamatModal
            userData={userData}
            onClose={() => setIsAlamatModalOpen(false)}
            onUserUpdate={fetchUserData}
          />
        )}

        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Informasi Lokasi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Kota</p>
            <p className="text-base text-gray-900">
              {userData.kota || "Belum diisi"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Provinsi</p>
            <p className="text-base text-gray-900">
              {userData.provinsi || "Belum diisi"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Kode Pos</p>
            <p className="text-base text-gray-900">
              {userData.kodepos || "Belum diisi"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Alamat</p>
            <p className="text-base text-gray-900">
              {userData.alamat || "Belum diisi"}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default UserProfil;
