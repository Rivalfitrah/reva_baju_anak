import React, { useState, useEffect } from 'react';
import { getUserLogin, edituser } from '../../service/api';
import Swal from "sweetalert2";

function ProfilModal({ onClose }) {
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    alamat: '',
    kota: '',
    kodepos: '',
    provinsi: '',
    img: null,
  });

  const [loading, setLoading] = useState(false);

useEffect(() => {
  async function fetchData() {
    try {
      const response = await getUserLogin();
      const user = response.data; // ambil isi data di dalam response

      setFormData({
        nama: user.nama || '',
        telepon: user.telepon || '',
        alamat: user.alamat || '',
        kota: user.kota || '',
        kodepos: user.kodepos || '',
        provinsi: user.provinsi || '',
        img: null, // tidak perlu isi ini karena input file tidak bisa diisi default
      });
    } catch (error) {
      console.error("Gagal ambil data user:", error);
    }
  }

  fetchData();
}, []);



  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = e => {
    setFormData(prev => ({
      ...prev,
      img: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const payload = new FormData();

    // Tambah hanya field yang tidak kosong
    if (formData.nama.trim() !== "") payload.append("nama", formData.nama);
    if (formData.telepon.trim() !== "") payload.append("telepon", formData.telepon);
    if (formData.alamat.trim() !== "") payload.append("alamat", formData.alamat);
    if (formData.kota.trim() !== "") payload.append("kota", formData.kota);
    if (formData.kodepos.trim() !== "") payload.append("kodepos", formData.kodepos);
    if (formData.provinsi.trim() !== "") payload.append("provinsi", formData.provinsi);
    if (formData.img) payload.append("img", formData.img);

    const token = localStorage.getItem("token");

    await fetch("", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: payload
    });
    Swal.fire({
        title: 'Berhasil!',
        text: 'Profil berhasil diperbarui.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.reload();
      });

    } catch (err) {
      Swal.fire({
        title: 'Gagal!',
        text: 'Terjadi kesalahan saat memperbarui profil.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };


  return (
    <div className="w-full h-full flex justify-center items-center bg-black/40 backdrop-blur-sm fixed top-0 left-0 z-50 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Edit Profil</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Nama"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">No Telepon</label>
            <input
              type="text"
              name="telepon"
              value={formData.telepon}
              onChange={handleChange}
              placeholder="Nomor telepon"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Profil</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-b from-[#FFE6C9] to-[#FFA09B] text-black font-semibold py-2 px-5 rounded-md hover:opacity-90 transition"
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-slate-400 text-black font-semibold py-2 px-5 rounded-md hover:opacity-90 transition"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilModal;
