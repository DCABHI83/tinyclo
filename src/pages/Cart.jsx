import React from 'react'
import cartBanner from '../assets/cartBanner.png'
import free from '../assets/freeDelivery.png'
import easy from '../assets/easyReturns.png'
import tick from '../assets/tick.png'
const Cart = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative border my-7">
        <img
          className="h-[20vw] w-full object-cover overflow-hidden"
          src={cartBanner}
          alt="Cart Banner"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#177CAA] text-5xl font-bold">
          Cart
        </h1>
      </div>

      <div className="container mx-auto p-6">
        {/* Grid layout: Cart items + Price Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* One-Time Purchase */}
            <div className="border rounded-lg p-4">
              <h3 className="text-center text-xl font-semibold text-red-500 mb-4">
                One-Time Purchase
              </h3>
              {/* Dynamic products will be rendered here */}
            </div>

            {/* Rental Purchase */}
            <div className="border rounded-lg p-4">
              <h3 className="text-center text-xl font-semibold text-blue-600 mb-4">
                Rental Purchase
              </h3>
              {/* Dynamic products will be rendered here */}
            </div>
          </div>

          {/* Right Section - Price Summary */}
          <div className="border rounded-lg p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Price Summary</h3>
            <p className="text-sm text-gray-500 mb-4">
              Includes GST and All other Taxes
            </p>
            <div className="flex justify-between py-2 border-b">
              <span>Total Item Price</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping Fee</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Total</span>
              <span>₹0</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Proceed
            </button>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="flex items-center justify-center gap-2 border rounded-lg p-4">
            {/* Icon */}
           <img src={free} alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 border rounded-lg p-4">
          <img src={easy} alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 border rounded-lg p-4">
            {/* Icon */}
          <img src={tick} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
