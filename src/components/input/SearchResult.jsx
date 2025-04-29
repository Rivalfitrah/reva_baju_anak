import React from 'react';

function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(angka);
}

function SearchResultItem({ image, name, price }) {
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 object-cover rounded-md mr-4"
      />
      <div>
        <h3 className="text-base font-medium text-gray-800">{name}</h3>
        <p className="text-sm text-pink-500 font-semibold">{formatRupiah(price)}</p>
      </div>
    </div>
  );
}

export default SearchResultItem;
