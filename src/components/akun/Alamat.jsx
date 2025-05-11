import { Pencil } from 'lucide-react'
import React from 'react'
import ProfilModal from '../input/AlamatModal'

function Alamat() {
  const [isopen, setIsOpen] = React.useState(false)
  return (

    <div className='bg-white shadow-md rounded-lg p-4 flex-1 relative'>
        {/* Tombol Edit */}
        
        <button onClick={()=> setIsOpen(true)} className='absolute top-4 right-4 flex items-center space-x-1 text-pink-500 hover:text-pink-600'>
            <Pencil className='w-4 h-4' />
            <span>Edit</span>
        </button>
        {isopen && <ProfilModal onClose={()=> setIsOpen(false)} />}
        {/* Info User */}
        <h2 className="text-2xl font-bold mb-6">Profil Informasi</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="text-gray-600 font-medium">Provinsi</p>
        <p className="text-gray-800">jawa</p>
        <hr />
      </div>
      <div>
        <p className="text-gray-600 font-medium">Kode pos</p>
        <p className="text-gray-800">77</p>
        <hr />
      </div>
        <div>
            <p className="text-gray-600 font-medium">Alamat</p>
            <p className="text-gray-800">lodayaa 5</p>
            <hr />
        </div>
    </div>

    </div>
  )
}

export default Alamat