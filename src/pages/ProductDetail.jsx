// src/pages/ProductDetail.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/productsApi";
import { CartContext } from "../Context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const { addCart } = useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-xl"
        />

        <h2 className="mt-4 text-2xl font-bold text-gray-800 text-center">
          {product.name}
        </h2>

        <div className="mt-4 flex flex-col items-center gap-3">
          <p className="text-lg font-medium text-gray-600">
            Buy Price: <span className="font-bold">₹{product.buyPrice}</span>
          </p>
          <p className="text-lg font-medium text-gray-600">
            Rent Price: <span className="font-bold">₹{product.rentPrice}</span>
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => addCart({ ...product, type: "buy" })}
            className="w-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Buy ₹{product.buyPrice}
          </button>
          <button
            onClick={() => addCart({ ...product, type: "rent" })}
            className="w-1/2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition"
          >
            Rent ₹{product.rentPrice}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
