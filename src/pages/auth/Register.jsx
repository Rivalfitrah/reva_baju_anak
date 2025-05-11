import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { register as registerAPI } from '../../service/api';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Validasi Zod Schema
const RegisterFormSchema = z.object({
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak cocok",
    path: ["confirmPassword"]
  });
  

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterFormSchema),
    mode: `onChange`,
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await registerAPI(data.email, data.password, data.confirmPassword);

      const token = response?.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        console.log("Token stored:", token);
      }
      

      Swal.fire({
        icon: 'success',
        title: 'Registrasi berhasil!',
        text: 'Akun Anda telah dibuat.',
      });

      navigate('/tambah-akun');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Silakan coba lagi.';
      Swal.fire({
        icon: 'error',
        title: 'Registrasi gagal!',
        text: errorMessage,
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FEE5CB] via-[#FFE6C9] to-[#FADCDA] h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <img src="../images/logo.png" alt="Logo" className="w-20 h-20" />
        </div>

        <h2 className="text-4xl font-bold text-center mb-4 p-3">Daftar</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Password (min. 8 karakter)"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("password")}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-1">Konfirmasi Password</label>
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#FFE6C9] to-[#FFA09B] text-black font-semibold py-3 rounded-md"
          >
            Daftar
          </button>
        </form>

        <p className='flex justify-center p-3 gap-2 mt-4'>Sudah punya akun?
          <Link to='/login' className='text-blue-500'> Masuk</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
