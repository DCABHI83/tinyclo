import React, { useContext } from "react";
import { button, useParams } from "react-router-dom";
import { ProductContext } from "../Context/productsApi";
import { CartContext } from "../Context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);

  const addCart = useContext(CartContext)

  // Find the product that matches the id
  const toshowProduct = products.find(
    (item) => item.id === parseInt(id) // convert id to number
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      {toshowProduct.map((curElem) => (
        <div
          key={curElem.id}
          className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-6"
        >
          {/* Product Image */}
          <img
            src={curElem.image}
            alt={curElem.name}
            className="w-full h-72 object-cover rounded-xl"
          />

          {/* Product Info */}
          <h2 className="mt-4 text-2xl font-bold text-gray-800 text-center">
            {curElem.name}
          </h2>

          <div className="mt-4 flex flex-col items-center gap-3">
            <p className="text-lg font-medium text-gray-600">
              Buy Price: <span className="font-bold">₹{curElem.buyPrice}</span>
            </p>
            <p className="text-lg font-medium text-gray-600">
              Rent Price: <span className="font-bold">₹{curElem.rentPrice}</span>
            </p>
          </div>

         
          <div className="mt-6 flex gap-4">
            <button onClick={()=>addCart(toshowProduct)}  className="w-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
           Add to Cart {curElem.buyPrice}
            </button>
            <button  className="w-1/2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition">
          Add to Cart {curElem.rentPrice}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
