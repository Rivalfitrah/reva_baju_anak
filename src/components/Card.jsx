import { ShoppingCart } from 'lucide-react';
import React from 'react';

function Card({ judul, jumlah, isi }) {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up" data-aos-duration="1000">
        {judul}
      </h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${isi} gap-6`}>
        {[...Array(jumlah)].map((_, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/kantong.png" alt="Product" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Nama Produk</h3>
                <span className="text-base font-bold text-gray-900 line-clamp-5">Rp 100.000</span>
                <div className="flex justify-between items-center mt-2">
                <span className='text-base'>⭐4.5</span>
                <button className=" bg-gradient-to-r from-satu to-pink text-black px-10 py-2 rounded-xl">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
