import React from 'react'

function History() {
  return (
    <div className='bg-white shadow-md rounded-lg p-4'>
      <h2 className='text-xl font-semibold mb-4'>Riwayat Transaksi</h2>
      <table className='w-full table-auto'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2'>Nama Barang</th>
            <th className='px-4 py-2'>Tanggal</th>
            <th className='px-4 py-2'>Jumlah</th>
            <th className='px-4 py-2'>Total Harga</th>
            <th className='px-4 py-2'>Invoice</th>
            <th className='px-4 py-2'>Status</th>
            <th className="px-4 py-2">Konfirmasi</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <td className='px-4 py-2'>Baju tungtung sahur</td>
            <td className='px-4 py-2'>17 april 1945</td>
            <td className='px-4 py-2'>1</td>
            <td className='px-4 py-2'>Rp 100.000</td>
            <td className='px-4 py-2'>#123456</td>
            <td className='px-4 py-2 text-green-500'>Selesai</td>
            <td className='px-4 py-2'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded'>Konfirmasi</button>
            </td>
          </tr>
          {/* Tambahkan lebih banyak baris sesuai kebutuhan */}
        </tbody>
        </table>

    </div>
  )
}

export default History