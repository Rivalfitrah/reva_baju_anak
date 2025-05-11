import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, UserCircle } from 'lucide-react';
import Swal from 'sweetalert2';

function ProfileMenu({ onClose }) {
  const navigate = useNavigate();

  const handleInfoAkun = () => {
    navigate('/profil'); // arahkan ke halaman profile
    onClose(); // tutup menu setelah klik
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Konfirmasi Logout",
      text: "Apakah kamu yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Keluar",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token'); // hapus token
        
        Swal.fire({
          title: "Berhasil Logout",
          text: "Kamu telah berhasil keluar.",
          icon: "success"
        }).then(() => {
          navigate('/login'); // arahkan ke login page
          onClose();
        });
      }
    });
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
      <button
        onClick={handleInfoAkun}
        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <UserCircle className="mr-2" size={18} />
        Informasi Akun
      </button>
      <button
        onClick={handleLogout}
        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
      >
        <LogOut className="mr-2" size={18} />
        Logout
      </button>
    </div>
  );
}

export default ProfileMenu;
