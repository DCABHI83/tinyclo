import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./Context/productsApi.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
 
  <ProductProvider>
<CartProvider>
      <App />
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition={Bounce}
      />
</CartProvider>
  </ProductProvider>

);
