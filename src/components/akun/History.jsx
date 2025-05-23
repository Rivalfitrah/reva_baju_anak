import React, { useEffect, useState } from 'react';
import { getorder } from '../../service/api'; // Pastikan path ini benar
import Pagination from '../product/Pagination'; // Pastikan path ini benar

function History() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await getorder(); // Mengganti nama variabel 'data' menjadi 'response' agar lebih jelas
        const allOrderItems = [];

        // Pastikan response.data ada dan merupakan array sebelum diproses
        (response.data || []).forEach(order => {
          if (Array.isArray(order.order_items)) {
            order.order_items.forEach(item => {
              allOrderItems.push({
                ...item, // Menyalin semua properti dari item (seperti produk, quantity, subtotal)
                order_id: order.order_id,
                created_at: order.created_at, // Tanggal order dibuat
                invoice: order.invoice,
                payment_redirect_url: order.payment_redirect_url, // <-- TAMBAHKAN INI
                order_status: order.status, // <-- Tambahkan status order jika perlu untuk logika tampilan
                payment_status: order.payment_status // <-- Tambahkan status pembayaran jika perlu
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
      <div className="overflow-x-auto">
              <table className='w-full table-auto'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2'>Nama Barang</th>
            <th className='px-4 py-2'>Tanggal Order</th>
            <th className='px-4 py-2'>Jumlah</th>
            <th className='px-4 py-2'>Subtotal Item</th>
            <th className="px-4 py-2">Link Bayar</th>
          </tr>
        </thead>
        <tbody>
          {displayedOrders.length > 0 ? (
            displayedOrders.map((item, index) => (
              <tr key={`${item.order_id}-${item.produk?.id || index}`} className="hover:bg-gray-50"> {/* Mengubah key agar lebih unik jika produk ada */}
                <td className="p-3 border">{item.produk?.name || "Tidak tersedia"}</td>
                <td className="p-3 border">{new Date(item.created_at).toLocaleDateString()}</td> {/* Ini adalah tanggal order */}
                <td className="p-3 border">{item.quantity}</td>
                <td className="p-3 border">Rp {item.subtotal?.toLocaleString() || 0}</td>
                <td className="p-3 border">
                  {item.payment_redirect_url && (item.order_status === 'pending' || item.payment_status === 'pending' || (item.order_status === 'failed' && item.payment_redirect_url)) ? ( // Tampilkan tombol hanya jika URL ada dan status memungkinkan untuk bayar/coba lagi
                    <a
                      href={item.payment_redirect_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 inline-block text-center" // 'inline-block' dan 'text-center' untuk styling
                    >
                      Lihat
                    </a>
                  ) : item.order_status === 'success' || item.payment_status === 'success' ? (
                    <span className="text-green-600">Lunas</span>
                  ) : (
                    <span className="text-gray-500">Tidak Tersedia</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500"> {/* Sesuaikan colSpan menjadi 5 */}
                Belum ada pesanan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>


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