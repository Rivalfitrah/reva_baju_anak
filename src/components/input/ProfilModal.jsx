import React from 'react';

function ProfilModal({onClose}) {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black/40 backdrop-blur-sm fixed top-0 left-0 z-50 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md space-y-6">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-center text-gray-800">Edit Profil</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Depan</label>
            <input
              type="text"
              placeholder="Nama depan"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Belakang</label>
            <input
              type="text"
              placeholder="Nama belakang"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">No Telepon</label>
            <input
              type="text"
              placeholder="Nomor telepon"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-2">
          <button
            type="submit"
            className="bg-gradient-to-b from-[#FFE6C9] to-[#FFA09B] text-black font-semibold py-2 px-5 rounded-md hover:opacity-90 transition"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-slate-400 text-black font-semibold py-2 px-5  rounded-md hover:opacity-90 transition"
          >
            batal
          </button>
          </div>


        </form>
      </div>
    </div>
  );
}

export default ProfilModal;
