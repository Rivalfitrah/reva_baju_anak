import React from 'react';

const ShoppingCart = () => {
  return (
    <main className="container mx-auto p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Cart Items */}
          <div className="bg-white shadow-lg rounded-lg p-6 pr-6">
            <h2 className="text-2xl font-bold mb-6">Keranjang</h2>

            {[1, 2].map((item, index) => (
              <div key={index} className="relative flex justify-between items-center p-3 pt-0.5 mb-4 shadow-lg rounded-b-lg">
                <button className="absolute top-2 right-2 z-10 group rounded-full focus:outline-none">
                  <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="fill-red-50 group-hover:fill-red-400 transition-all" cx="17" cy="17" r="17" />
                    <path className="stroke-red-500 group-hover:stroke-white transition-all" d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>

                <input type="checkbox" className="form-checkbox text-indigo-600 w-5 h-5 mr-4" />

                <div className="flex items-center p-1">
                  <img src="images/1.webp" alt="Baju Bunga" className="h-16 w-16 object-cover rounded mr-4" />
                  <div className="p-3">
                    <h3 className="font-semibold">Baju Bunga</h3>
                    <p>Rp. 50.000</p>
                    <p className="text-sm">Size: L</p>
                    <p className="text-sm">Color: Hijau Tua</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button className="group rounded-[50px] border border-gray-200 shadow-sm p-1.5 bg-white hover:shadow-gray-200 hover:bg-gray-50">
                    <svg className="stroke-gray-900 group-hover:stroke-black" width="14" height="14" viewBox="0 0 18 19" fill="none">
                      <path d="M4.5 9.5H13.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <input type="text" className="border border-gray-200 rounded-full w-8 aspect-square text-center text-sm font-semibold bg-gray-100" placeholder="2" />
                  <button className="group rounded-[50px] border border-gray-200 shadow-sm p-1.5 bg-white hover:shadow-gray-200 hover:bg-gray-50">
                    <svg className="stroke-gray-900 group-hover:stroke-black" width="14" height="14" viewBox="0 0 18 19" fill="none">
                      <path d="M3.75 9.5H14.25M9 14.75V4.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="relative flex justify-between items-center p-3 pt-0.5 mb-4 shadow-lg rounded-b-lg">
              <div className="flex items-center p-1">
                <img src="images/1.webp" alt="Baju Bunga" className="h-16 w-16 object-cover rounded mr-4" />
                <div className="p-3">
                  <h3 className="font-semibold">Baju Bunga</h3>
                  <p>Rp. 50.000</p>
                  <p className="text-sm">Size: L</p>
                  <p className="text-sm">Color: Hijau Tua</p>
                </div>
              </div>

              <input type="text" className="border border-gray-200 rounded-full w-8 aspect-square text-center text-sm font-semibold bg-gray-100" placeholder="2" />
            </div>

            <div className="mb-4">
              <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700">Discount code / Promo code</label>
              <input type="text" id="promo-code" placeholder="Enter your promo code" className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
            </div>

            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">Rp. 50.000</span>
            </div>

            <div className="flex justify-between mb-4 items-center">
              <span className="font-medium">Estimated shipping & Handling</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="" disabled selected hidden>Select</option>
                <option value="standard">Standard - Rp10.000</option>
                <option value="express">Express - Rp25.000</option>
                <option value="same-day">Same Day - Rp40.000</option>
              </select>
            </div>

            <div className="flex justify-between mb-4">
              <span className="font-bold">Total</span>
              <span className="font-bold">Rp. 50.000</span>
            </div>

            <button className="w-full bg-pink-500 text-white font-bold py-2 rounded hover:bg-pink-600">Checkout</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;
