import React from 'react'
import { Link } from 'react-router'

function Register() {
  return (
    <form className=" bg-gradient-to-b from-[#FEE5CB] via-[#FFE6C9] to-[#FADCDA] h-screen flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        {/* Logo */}
        <div className="flex justify-center mb-4">
            <img src="../images/logo.png" alt="Logo" className="w-20 h-20" />
        </div>

        {/* Judul */}
        <h2 className="text-4xl font-bold text-center mb-4 p-3">Daftar</h2>

        <label>
            <span className="text-lg font-semibold">Username</span>
            <input type="text" placeholder="Username" className="block w-full p-2 border border-gray-300 rounded-md mt-1" />
        </label>

        <label>
            <span className="text-lg font-semibold">Email</span>
            <input type="email" placeholder="Email" className="block w-full p-2 border border-gray-300 rounded-md mt-1" />
        </label>

        <label>
            <span className="text-lg font-semibold">Password</span>
            <input type="password" placeholder="Password" className="block w-full p-2 border border-gray-300 rounded-md mt-1" />
        </label>

        <label>
            <span className="text-lg font-semibold">Konfirmasi Password</span>
            <input type="password" placeholder="Konfirmasi Password" className="block w-full p-2 border border-gray-300 rounded-md mt-1" />
        </label>

        <button className="w-full bg-gradient-to-b from-[#FFE6C9] to bg-[#FFA09B] text-black font-semibold py-2 mt-4 rounded-md">
            Daftar
        </button>

        <p className='flex justify-center p-3 gap-2'>Sudah punya akun?
            <Link to='/login' className='text-blue-500'> Masuk</Link>
        </p>
    </div>
</form>
  )
}

export default Register