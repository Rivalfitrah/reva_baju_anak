import React from 'react';
import PropTypes from 'prop-types';

const ModalRedirect = ({ isOpen, onClose, redirectUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Konfirmasi Checkout</h2>
        <p className="mb-6">Anda akan diarahkan ke halaman pembayaran Midtrans. Apakah Anda ingin melanjutkan?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => { onClose(); window.location.reload(); }}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Kembali
          </button>
          <a
            href={redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            Lanjutkan
          </a>
        </div>
      </div>
    </div>
  );
};

ModalRedirect.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  redirectUrl: PropTypes.string.isRequired,
};

export default ModalRedirect;
