import React, { useEffect, useState } from 'react';
import { getcartdetail, deletecartById, order } from '../service/api';
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import ModalRedirect from './ModalRedirect';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]); // array berisi ID cart yang dipilih
  const [shippingCost, setShippingCost] = useState(0);

  // bayar
  const [modalOpen, setModalOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleToggleItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

const handleDeleteItem = async (id) => {
  const result = await Swal.fire({
    title: 'Yakin ingin menghapus?',
    text: 'Item akan dihapus dari keranjang.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus',
    cancelButtonText: 'Batal',
  });

  if (result.isConfirmed) {
    try {
      await deletecartById(id);
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      setSelectedItems(prevSelected => prevSelected.filter(itemId => itemId !== id));
      Swal.fire('Terhapus!', 'Item berhasil dihapus.', 'success');
    } catch (error) {
      console.error("Gagal menghapus item:", error);
      Swal.fire('Gagal!', 'Item gagal dihapus.', 'error');
    }
  }
};

  const subtotal = cartItems
  .filter((item) => selectedItems.includes(item.id))
  .reduce((sum, item) => sum + item.subtotal, 0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getcartdetail();
        setCartItems(response.cart_items || []); // pastikan kamu sesuaikan dengan response backend
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil cart:", error);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleIncrease = (id) => {
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * item.harga }
        : item
    )
  );
};

const handleDecrease = (id) => {
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1, subtotal: (item.quantity - 1) * item.harga }
        : item
    )
  );
};

const handleOrderChat = async () => {
  const result = await Swal.fire({
    title: 'Konfirmasi Checkout',
    text: 'Apakah Anda yakin ingin melanjutkan ke pembayaran?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Batal',
  });

  if (result.isConfirmed) {
    const ukuranMap = {
      XS: 1,
      S: 2,
      M: 3,
      L: 4,
      XL: 5,
    };

    const items = cartItems
      .filter((item) => selectedItems.includes(item.id))
      .map((item) => ({
        cart_detail_id: item.id,
        ukuran_id: ukuranMap[item.ukuran] || null, // Nilai default null jika ukuran tidak ditemukan
        quantity: item.quantity || 1, // Default quantity 1 jika tidak ada
      }));

    try {
      const response = await order(items);
      console.log("Order sukses:", response);

      // Ambil URL Midtrans
      setRedirectUrl(response.payment?.redirect_url || "");
      setModalOpen(true); // Tampilkan modal
    } catch (error) {
      console.error("Gagal membuat order:", error);
      Swal.fire("Gagal", "Terjadi kesalahan saat checkout", "error");
    }
  }
};

    if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <main className="container mx-auto p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Cart Items */}
          <div className="bg-white shadow-lg rounded-lg p-6 pr-6">
            <h2 className="text-2xl font-bold mb-6">Keranjang</h2>

            {cartItems.length > 0 ? cartItems.map((item, index) => (
              <div key={index} className="relative flex justify-between items-center p-3 pt-0.5 mb-4 shadow-lg rounded-b-lg">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600 w-5 h-5 mr-4"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleToggleItem(item.id)}
                />
                <div className="flex items-center p-1">
                  <img 
                    alt={item.nama_produk}
                    className="h-16 w-16 object-cover rounded mr-4"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold">{item.nama_produk}</h3>
                    <p>Rp. {item.harga.toLocaleString('id-ID')}</p>
                    <p className="text-sm">Size: {item.ukuran}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button onClick={() => handleDecrease(item.id)} className="group rounded-[50px] border border-gray-200 shadow-sm p-1.5 bg-white hover:shadow-gray-200 hover:bg-gray-50">
                    <svg className="stroke-gray-900" width="14" height="14" viewBox="0 0 18 19" fill="none">
                      <path d="M4.5 9.5H13.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="border border-gray-200 rounded-full w-8 aspect-square text-center text-sm font-semibold bg-gray-100"
                    value={item.quantity}
                    readOnly
                  />
                  <button onClick={() => handleIncrease(item.id)} className="group rounded-[50px] border border-gray-200 shadow-sm p-1.5 bg-white hover:shadow-gray-200 hover:bg-gray-50">
                    <svg className="stroke-gray-900" width="14" height="14" viewBox="0 0 18 19" fill="none">
                      <path d="M3.75 9.5H14.25M9 14.75V4.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button onClick={() => handleDeleteItem(item.id)} className="group rounded-[50px] border border-gray-200 shadow-sm p-1.5 bg-white hover:shadow-gray-200 hover:bg-gray-50">
                  <div className="px-2">
                  <Trash2  className=' text-red-500'/>
                  </div>
                  </button>
                </div>
              </div>
            )) : (
              <p className="text-gray-500">Keranjang kosong</p>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">
                  Rp. {subtotal.toLocaleString('id-ID')}
                </span>
             </div>

            <div className="flex justify-between mb-4 items-center">
              <span className="font-medium">Estimasi Ongkir</span>
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={shippingCost}
                onChange={(e) => setShippingCost(Number(e.target.value))}
              >
                <option value="">Pilih pengiriman</option>
                <option value="10000">Standard - Rp10.000</option>
                <option value="25000">Express - Rp25.000</option>
              </select>
            </div>

            <div className="flex justify-between mb-4">
              <span className="font-bold">Total</span>
              <span className="font-bold">
                Rp. {(subtotal + shippingCost).toLocaleString('id-ID')}
              </span>
            </div>

            <button onClick={handleOrderChat} className="w-full bg-pink-500 text-white font-bold py-2 rounded hover:bg-pink-600">Checkout</button>
          </div>
        </div>
      </div>
      <ModalRedirect
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        redirectUrl={redirectUrl}
      />
    </main>
  );
};

export default ShoppingCart;
