import React from "react";

export default function UserProfilPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-white shadow-md w-full md:w-1/4 p-6">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <nav className="space-y-2">
          <a
            href="#"
            className="block px-4 py-2 rounded-lg bg-blue-500 text-white font-medium"
          >
            Profil
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded-lg hover:bg-gray-200 text-gray-800"
          >
            History
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Profile Header */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex flex-col md:flex-row items-center md:items-start gap-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-300"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>

        {/* Personal Info */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Data Pribadi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">Nama Depan</label>
              <input
                type="text"
                value="John"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Nama Belakang</label>
              <input
                type="text"
                value="Doe"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">No Telepon</label>
              <input
                type="text"
                value="08123456789"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                value="johndoe@example.com"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
          </div>
        </section>

        {/* Address Info */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Alamat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600">Alamat Lengkap</label>
              <input
                type="text"
                value="Jl. Contoh Alamat No. 123"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Kota</label>
              <input
                type="text"
                value="Jakarta"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Kode Pos</label>
              <input
                type="text"
                value="12345"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Provinsi</label>
              <input
                type="text"
                value="DKI Jakarta"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Negara</label>
              <input
                type="text"
                value="Indonesia"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50"
                disabled
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
