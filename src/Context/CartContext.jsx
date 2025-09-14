// src/Context/CartContext.jsx
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success(`${product.name} added to cart 🛒`);
      return updatedCart;
    });
  };

  const removeCart = (id) => {
    setCart((prevCart) => {
      const removedItem = prevCart.find((item) => item.id === id);
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      if (removedItem) {
        toast.error(`${removedItem.name} removed from cart ❌`);
      }
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
