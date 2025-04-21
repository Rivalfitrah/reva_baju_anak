import React from 'react'

function AddAkun() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="../images/logo.png" alt="Logo" className="w-20 h-20" />
        </div>

        {/* Judul */}
        <h2 className="text-4xl font-bold text-center mb-6">Daftar</h2>

                {/* Foto Profil Bulat */}
                <div className="flex justify-center mb-6">
          <img
            src="../images/profile-placeholder.png" // Ganti dengan path gambar profil
            alt="Foto Profil"
            className="w-24 h-24 rounded-full border-4 border-pink-300 object-cover shadow-md"
          />
        </div>

        {/* Form Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label htmlFor="nama-depan">
            <span className="text-lg font-semibold">Nama Depan</span>
            <input
              type="text"
              id="nama-depan"
              placeholder="Nama Depan"
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </label>
          <label htmlFor="nama-belakang">
            <span className="text-lg font-semibold">Nama Belakang</span>
            <input
              type="text"
              id="nama-belakang"
              placeholder="Nama Belakang"
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </label>
          <label htmlFor="no-telepon">
            <span className="text-lg font-semibold">No Telepon</span>
            <input
              type="text"
              id="no-telepon"
              placeholder="No Telepon"
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </label>
          <label htmlFor="email">
            <span className="text-lg font-semibold">Email</span>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </label>

            <label htmlFor="kota">
                <span className="text-lg font-semibold">Kota</span>
                <input
                type="text"
                id="kota"
                placeholder="Kota"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                />
            </label>
            <label htmlFor="kode-pos">
                <span className="text-lg font-semibold">Kode Pos</span>
                <input
                type="text"
                id="kode-pos"
                placeholder="Kode Pos"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                />
            </label>
            <label htmlFor="provinsi">
                <span className="text-lg font-semibold">Provinsi</span>
                <input
                type="text"
                id="provinsi"
                placeholder="Provinsi"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                />
            </label>
            <label htmlFor="negara">
                <span className="text-lg font-semibold">Negara</span>
                <input
                type="text"
                id="negara"
                placeholder="Negara"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                />
            </label>
            <label htmlFor="alamat-lengkap">
                <span className="text-lg font-semibold">Alamat Lengkap</span>
                <input
                type="text"
                id="alamat-lengkap"
                placeholder="Alamat Lengkap"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
                />
            </label>
            <label htmlFor="foto-profil">
            <span className="text-lg font-semibold">Foto Profil</span>
            <input
                type="file"
                id="foto-profil"
                accept="image/*"
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
            />
        </label>
        </div>

        <div className="flex justify-center mt-6">
        <div className='w-full bg-gradient-to-b from-[#FFE6C9] to bg-[#FFA09B] text-black font-semibold py-2 mt-4 rounded-md'>
            <button className='flex justify-center items-center w-full'>Simpan</button>
        </div>
        </div>


      </div>
    </div>
  )
}

export default AddAkun
