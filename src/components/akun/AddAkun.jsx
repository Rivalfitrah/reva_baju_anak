import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../../service/api'
import Swal from 'sweetalert2'

// Component AddAkun
function AddAkun() {
  const [nama, setNama] = useState('')
  const [telepon, setTelepon] = useState('')
  const [alamat, setAlamat] = useState('')
  const [kodepos, setKodepos] = useState('')
  const [kota, setKota] = useState('')
  const [provinsi, setProvinsi] = useState('')
  const [imgFile, setImgFile] = useState(null)
  const [imgPreview, setImgPreview] = useState("../images/profile-placeholder.png")

  const navigate = useNavigate()
  
  // Handler untuk file gambar
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      // Buat URL preview untuk gambar
      const previewUrl = URL.createObjectURL(file);
      setImgPreview(previewUrl);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postUser(nama, telepon, alamat, kodepos, kota, provinsi, imgFile)
      console.log("berhasil post user:", response)
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data berhasil disimpan.',
      })
      navigate('/')
    }
    catch (error) {
      console.error("gagal post user:", error)
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Data gagal disimpan.',
      })
    }
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="../images/logo.png" alt="Logo" className="w-20 h-20" />
        </div>

        {/* Judul */}
        <h2 className="text-4xl font-bold text-center mb-6">Daftar</h2>

        {/* Form Input */}
        <form onSubmit={handleSubmit}>
          {/* Foto Profil Bulat */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={imgPreview}
              alt="Foto Profil"
              className="w-24 h-24 rounded-full border-4 border-pink-300 object-cover shadow-md mb-2"
            />
            <label htmlFor="foto-profil" className="cursor-pointer text-blue-500 hover:text-blue-700">
              Ubah Foto
              <input
                type="file"
                id="foto-profil"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label htmlFor="nama-lengkap">
              <span className="text-lg font-semibold">Nama Lengkap</span>
              <input
                type="text"
                id="nama-lengkap"
                placeholder="Nama Lengkap"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </label>
            <label htmlFor="no-telepon">
              <span className="text-lg font-semibold">No Telepon</span>
              <input
                type="text"
                id="no-telepon"
                placeholder="No Telepon"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
                required
              />
            </label>
            <label htmlFor="kota">
              <span className="text-lg font-semibold">Kota</span>
              <input
                type="text"
                id="kota"
                placeholder="Kota"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                value={kota}
                onChange={(e) => setKota(e.target.value)}
                required
              />
            </label>
            <label htmlFor="kode-pos">
              <span className="text-lg font-semibold">Kode Pos</span>
              <input
                type="text"
                id="kode-pos"
                placeholder="Kode Pos"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                value={kodepos}
                onChange={(e) => setKodepos(e.target.value)}
                required
              />
            </label>
            <label htmlFor="provinsi">
              <span className="text-lg font-semibold">Provinsi</span>
              <input
                type="text"
                id="provinsi"
                placeholder="Provinsi"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}
                required
              />
            </label>
            <label htmlFor="alamat-lengkap" className="md:col-span-2">
              <span className="text-lg font-semibold">Alamat Lengkap</span>
              <input
                type="text"
                id="alamat-lengkap"
                placeholder="Alamat Lengkap"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="flex justify-center mt-6">
            <button 
              type="submit"
              className="w-full flex justify-center items-center bg-gradient-to-b from-[#FFE6C9] to-[#FFA09B] text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAkun