import React from 'react';
import Sidebarpage from '../components/Sidebar';

function ProfilPage() {
  return (
    <Sidebarpage>
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <div className="flex justify-between">
          <h1 className='text-xl font-semibold mb-4'>Informasi Profil</h1>
          <a className='text-base font-semibold text-blue-500 mr-5' 
          href="">Edit
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className='text-gray-500'>Nama depan</p>
            <p className='font-semibold'>John Doe</p>
          </div>
          <div>
            <p className='text-gray-500'>Nama belakang</p>
            <p className='font-semibold'>Doe</p>
          </div>
          <div>
            <p className='text-gray-500'>Email</p>
            <p className='font-semibold'>johndoe@gmail.com</p>
          </div>
          <div>
            <p className='text-gray-500'>No. HP</p>
            <p className='font-semibold'>+62 857-0256-0885</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full mt-6">
      <div className="flex justify-between">
          <h1 className='text-xl font-semibold mb-4'>Alamat</h1>
          <a className='text-base font-semibold text-blue-500 mr-5' 
          href="">Edit
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className='text-gray-500'>Alamat</p>
            <p className='font-semibold'>Jl. Kenangan No. 1</p>
          </div>
          <div>
            <p className='text-gray-500'>Kota</p>
            <p className='font-semibold'>Jakarta</p>
          </div>
          <div>
            <p className='text-gray-500'>Provinsi</p>
            <p className='font-semibold'>DKI Jakarta</p>
          </div>
          <div>
            <p className='text-gray-500'>Kode Pos</p>
            <p className='font-semibold'>12345</p>
          </div>
        </div>
      </div>
    </Sidebarpage>
  );
}

export default ProfilPage;
