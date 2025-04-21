import React from 'react'
import { Pencil } from 'lucide-react'
import ProfilModal from '../input/ProfilModal'


function UserProfil() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex-1 relative">
    {/* Tombol Edit */}
    <button onClick={() => setIsModalOpen(true)} className="absolute top-4 right-4 flex items-center space-x-1 text-pink-500 hover:text-pink-600">
      <Pencil className="w-4 h-4" />
      <span>Edit</span>
    </button>
    {isModalOpen && <ProfilModal onClose={()=> setIsModalOpen(false)} />}

    {/* Info User */}
    <h2 className="text-2xl font-bold mb-6">Profil Informasi</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="text-gray-600 font-medium">Nama Depan</p>
        <p className="text-gray-800">John</p>
        <hr />
      </div>
      <div>
        <p className="text-gray-600 font-medium">Nama Belakang</p>
        <p className="text-gray-800">Doe</p>
        <hr />
      </div>
      <div>
        <p className="text-gray-600 font-medium">Email</p>
        <p className="text-gray-800">johndoe@email.com</p>
        <hr />
      </div>
      <div>
        <p className="text-gray-600 font-medium">No Telepon</p>
        <p className="text-gray-800">0812-3456-7890</p>
        <hr />
      </div>
    </div>
  </div>

  )
}

export default UserProfil