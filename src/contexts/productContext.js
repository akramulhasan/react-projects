import React, { createContext, useState } from "react"
export const productContext = createContext()

export const ProductProvider = (props) => {
 const [products, setProducts] = useState([
  { id: 100, name: "Mobile", price: "10000" },
  { id: 101, name: "Camera", price: "80000" },
  { id: 102, name: "Laptop", price: "1020000" },
 ])

 return (
  <productContext.Provider value={[products, setProducts]}>
   {props.children}
  </productContext.Provider>
 )
}
