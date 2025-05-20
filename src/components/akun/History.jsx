import React, { useEffect, useState } from 'react';
import { getorder } from '../../service/api';
import Pagination from '../product/Pagination';

function History() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await getorder();
        const allOrderItems = [];

        (data.data || []).forEach(order => {
          if (Array.isArray(order.order_items)) {
            order.order_items.forEach(item => {
              allOrderItems.push({
                ...item,
                order_id: order.order_id,
                created_at: order.created_at,
                invoice: order.invoice
              });
            });
          }
        });

        setOrders(allOrderItems);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchdata();
  }, []);

  // Pagination
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedOrders = orders.slice(startIndex, endIndex);

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
          {displayedOrders.length > 0 ? (
            displayedOrders.map((item, index) => (
              <tr key={`${item.order_id}-${index}`} className="hover:bg-gray-50">
                <td className="p-3 border">{item.produk?.name || "Tidak tersedia"}</td>
                <td className="p-3 border">{new Date(item.created_at).toLocaleDateString()}</td>
                <td className="p-3 border">{item.quantity}</td>
                <td className="p-3 border">Rp {item.subtotal.toLocaleString()}</td>
                <td className="p-3 border">{item.invoice}</td>
                <td className="p-3 border">-</td>
                <td className="p-3 border">
                  <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600">
                    Lihat
                  </button>
                </td>
              </tr>
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

      {/* Pagination */}
      {orders.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default History;
