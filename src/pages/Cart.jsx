// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import cartBanner from "../assets/cartBanner.png";
import free from "../assets/freeDelivery.png";
import easy from "../assets/easyReturns.png";
import tick from "../assets/tick.png";

const Cart = () => {
  const { cart, removeCart } = useContext(CartContext);

  const oneTimePurchase = cart.filter((item) => item.type === "buy");
  const rentalPurchase = cart.filter((item) => item.type === "rent");

  const total = cart.reduce((sum, item) => {
    return sum + (item.type === "buy" ? item.buyPrice : item.rentPrice);
  }, 0);

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* One-Time Purchase */}
            <div className="border rounded-lg p-4 bg-white shadow">
              <h3 className="text-center text-xl font-semibold text-red-500 mb-4">
                One-Time Purchase
              </h3>
              {oneTimePurchase.length === 0 ? (
                <p className="text-gray-500 text-center">No items</p>
              ) : (
                oneTimePurchase.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 border-b py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        ₹{item.buyPrice}
                      </p>
                    </div>
                    <button
                      onClick={() => removeCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Rental Purchase */}
            <div className="border rounded-lg p-4 bg-white shadow">
              <h3 className="text-center text-xl font-semibold text-blue-600 mb-4">
                Rental Purchase
              </h3>
              {rentalPurchase.length === 0 ? (
                <p className="text-gray-500 text-center">No items</p>
              ) : (
                rentalPurchase.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 border-b py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        ₹{item.rentPrice}
                      </p>
                    </div>
                    <button
                      onClick={() => removeCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Section - Price Summary */}
          <div className="border rounded-lg p-6 h-fit bg-white shadow">
            <h3 className="text-xl font-semibold mb-4">Price Summary</h3>
            <p className="text-sm text-gray-500 mb-4">
              Includes GST and All other Taxes
            </p>
            <div className="flex justify-between py-2 border-b">
              <span>Total Item Price</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping Fee</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Proceed
            </button>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="flex flex-col items-center justify-center gap-2 border rounded-lg p-4">
            <img src={free} alt="Free Delivery" className="w-10 h-10" />
            <p className="text-gray-600 font-medium">Free Delivery</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border rounded-lg p-4">
            <img src={easy} alt="Easy Returns" className="w-10 h-10" />
            <p className="text-gray-600 font-medium">Easy Returns</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border rounded-lg p-4">
            <img src={tick} alt="Secure" className="w-10 h-10" />
            <p className="text-gray-600 font-medium">100% Secure</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
