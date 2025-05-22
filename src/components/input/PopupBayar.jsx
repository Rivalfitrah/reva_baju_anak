import React from 'react'


function PopupBayar({ isopen, onClose, redirectUrl }) {
  if (!isopen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Konfirmasi Checkout</h2>
        <p className="mb-6">Apakah kamu ingin melanjutkan pembayaran di Midtrans?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Batal
          </button>
          <button
            onClick={() => window.location.href = redirectUrl}
            className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600"
          >
            Ya, Lanjutkan
          </button>
        </div>
      </div>
    </div>
  )
}


export default PopupBayar