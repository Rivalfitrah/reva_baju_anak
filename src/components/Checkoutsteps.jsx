import React from 'react';

const CheckoutSteps = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-xl mt-32">
      {/* Step Indicator */}
      <div className="flex justify-between mb-10 text-base md:text-lg">
        <div className="text-gray-400 flex items-start space-x-3">
          <img src="images/Location.png" alt="Address" className="h-6 w-6 mt-0.5" />
          <div className="leading-tight">
            Step 1 <br />
            <span className="text-gray-400">Address</span>
          </div>
        </div>
        <div className="text-gray-400 flex items-start space-x-3">
          <img src="images/Shipping.png" alt="Shipping" className="h-6 w-6 mt-0.5 opacity-40" />
          <div className="leading-tight">
            Step 2 <br />
            <span className="text-gray-400">Shipping</span>
          </div>
        </div>
        <div className="text-pink-600 font-bold flex items-start space-x-3">
          <img src="images/Payment.png" alt="Payment" className="h-6 w-6 mt-0.5" />
          <div className="leading-tight">
            Step 3 <br />
            <span className="text-black">Payment</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Summary */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Summary</h2>
          <div className="flex items-center gap-4 p-4 shadow-md rounded-lg bg-white">
            <img src="images/1.webp" alt="Baju Bunga" className="h-20 w-20 object-cover rounded" />
            <div>
              <h3 className="font-semibold text-lg">Baju Bunga</h3>
              <p>Rp. 50.000</p>
              <p className="text-sm">Size: L</p>
              <p className="text-sm">Color: Hijau Tua</p>
              <p className="text-sm">Quantity: 2</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 font-medium mb-1">Address</p>
            <p className="text-sm">Jalan Pahlawan komplek Pakuan Hill Blok A, No 46</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 font-medium mb-1">Shipment method</p>
            <p className="text-sm">Free</p>
          </div>

          <div className="border-t pt-4 text-sm space-y-1">
            <div className="flex justify-between font-semibold text-black">
              <span>Subtotal</span>
              <span>Rp. 50.000</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated shipping & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-black">
              <span>Total</span>
              <span>Rp. 50.000</span>
            </div>
          </div>
        </div>

        {/* Payment */}
        <form className="space-y-8 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold">Payment</h2>
            <div className="space-y-4 mt-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="cod" defaultChecked className="text-pink-500" />
                <span>Cash on Delivery</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="bank" className="text-pink-500" />
                <span>Bank</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="ewallet" className="text-pink-500" />
                <span>E-Wallet</span>
              </label>
            </div>

            <label className="flex items-center space-x-2 text-sm mt-4">
              <input type="checkbox" defaultChecked />
              <span>Same as billing address</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-6">
            <a
              href="/shipping"
              className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Kembali
            </a>
            <button
              type="submit"
              className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Bayar Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutSteps;