import { createContext } from "react";
import store from '../Api/store.json'
export const ProductContext = createContext()

export const ProductProvider = ({children})=>{
return <ProductContext.Provider value={store}>{children}</ProductContext.Provider>
}

