import React from 'react'
import { Link } from 'react-router'

function Login() {
  return (
    <>
<form className=" bg-gradient-to-b from-[#FEE5CB] via-[#FFE6C9] to-[#FADCDA] h-screen flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        {/* Logo */}
        <div className="flex justify-center mb-4">
            <img src="../images/logo-reva-baju-anak.png" alt="Logo" className="w-20 h-20" />
        </div>

        {/* Judul */}
        <h2 className="text-4xl font-bold text-center mb-4">Masuk</h2>

        {/* Input Username */}
        <label className="block">
            <span className="text-lg font-semibold">Username</span>
            <input type="text" placeholder="Username" className="block w-full p-2 border border-gray-300 rounded-md mt-1" />
        </label>

        {/* Input Password */}
        <label className="block mt-3">
            <span className="text-lg font-semibold">Password</span>
            <input type="password" placeholder="Password" className="block w-full p-2 border border-gray-300 rounded-md mt-1" />
        </label>

        <a href='' className=' flex justify-end'>lupa password?</a>

        {/* Tombol Masuk */}
        <button className="w-full bg-gradient-to-b from-[#FFE6C9] to bg-jambu text-black font-semibold py-2 mt-4 rounded-md">
            Masuk
        </button>

        <p className='flex justify-center p-3 gap-2'>Belum punya akun?
            <Link to='/register' className='text-blue-500'> Daftar</Link>
        </p>
    </div>
</form>

    
    </>
  )
}

export default Login