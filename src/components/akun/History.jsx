import React, { useEffect } from 'react'
import { useState } from 'react'
import { getorder } from '../../service/api'

function History() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await getorder();
        setOrders(data.data)
        setLoading(true)
      } catch (error) {
        console.error("Gagal mengambil data:", error)
      }
    };
    fetchdata();
  }, [])

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
  {orders.length > 0 ? (
    orders.map((order, index) => (
      order.order_items.map((item, itemIndex) => (
        <tr key={`${order.order_id}-${itemIndex}`} className="hover:bg-gray-50">
          <td className="p-3 border">{item.produk.name}</td>
          <td className="p-3 border">{new Date(order.created_at).toLocaleDateString()}</td>
          <td className="p-3 border">{item.quantity}</td>
          <td className="p-3 border">Rp {item.subtotal.toLocaleString()}</td>
          <td className="p-3 border">{order.invoice}</td>
          <td className="p-3 border">order.</td>
          <td className="p-3 border">
            <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600">
              Lihat
            </button>
          </td>
        </tr>
      ))
    ))
  ) : (
    <tr>
      <td colSpan="7" className="text-center p-4 text-gray-500">
        Belum ada pesanan.
      </td>
    </tr>
  )}
</tbody>

        </table>

    </div>
  )
}

export default History