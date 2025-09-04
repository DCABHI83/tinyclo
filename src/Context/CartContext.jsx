import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState(()=>{
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart) : []
    })
  

    const addCart = (product)=>{
        setCart((prevCart)=>{
            const updatedCart = [...prevCart,product]
         localStorage.setItem("cart",JSON.stringify(updatedCart))
         return updatedCart
        })
    }
  return <CartContext.Provider value={{cart,addCart}}>{children}</CartContext.Provider>
}
