import React, { useContext } from "react";
import { ProductContext } from "../Context/productsApi";
import { NavLink } from "react-router-dom";

const Boys = () => {
  const products = useContext(ProductContext);
  const boysProducts = products.filter((item) => item.section === "Boys");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {boysProducts.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
        >
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-60 object-cover rounded-xl"
          />

          {/* Product Name */}
          <h3 className="mt-3 text-lg font-semibold text-gray-800 text-center">
            {item.name}
          </h3>

          {/* Action Buttons */}
          <div className="mt-3 flex flex-col gap-2 w-full">
            <NavLink to={`/product-details/${item.id}`} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Buy Now @₹{item.buyPrice}
            </NavLink>

            <NavLink to={`/product-details/${item.id}`} className="w-full px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition duration-200">
              Rent @₹{item.rentPrice}
            </NavLink>
          </div> 
        </div>
      ))}
    </div>
  );
};

export default Boys;
