import React, { useState } from "react";
import { Link } from "react-router";
import { loginUser } from "../../service/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // validasi zod
  const loginformschema = z.object({
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
  })

  const validateInput = (field, value) => {
  try {
    loginformschema.pick({ [field]: true }).parse({ [field]: value });
    setErrors((prev) => ({ ...prev, [field]: null }));
  } catch (err) {
    setErrors((prev) => ({ ...prev, [field]: err.errors[0].message }));
  }
};


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password); // langsung login + simpan token

      Swal.fire({
        icon: "success",
        title: "Login berhasil!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login gagal",
        text: err.response?.data?.message || "Email atau password salah!",
      });
    }
  };
  return (
    <>
      <form
        className=" bg-gradient-to-b from-[#FEE5CB] via-[#FFE6C9] to-[#FADCDA] h-screen flex justify-center items-center"
        onSubmit={handleLogin}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="../images/logo.png" alt="Logo" className="w-20 h-20" />
          </div>

          {/* Judul */}
          <h2 className="text-4xl font-bold text-center mb-4">Masuk</h2>

          {/* Input Username */}
          <label className="block">
            <span className="text-lg font-semibold">email</span>
            <input
              type="email"
              placeholder="email"
              value={email}
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
              onChange={(e) => {setEmail(e.target.value)
              validateInput("email", e.target.value)
              }}
              required
            />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </label>

          {/* Input Password */}
          <label className="block mt-3">
            <span className="text-lg font-semibold">Password</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
              onChange={(e) => {setpassword(e.target.value)
              validateInput("password", e.target.value)
              }}
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </label>

          {/* Tombol Masuk */}
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#FFE6C9] to bg-jambu text-black font-semibold py-2 mt-4 rounded-md"
          >
            Masuk
          </button>

          <p className="flex justify-center p-3 gap-2">
            Belum punya akun?
            <Link to="/register" className="text-blue-500">
              {" "}
              Daftar
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
