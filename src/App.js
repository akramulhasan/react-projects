import logo from "./logo.svg"
import "./App.css"
import { useContext, useState } from "react"
import { userContext, UserProvider } from "./contexts/userContext"
import Home from "./components/Home"
import { ProductProvider } from "./contexts/productContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Delete from "./components/Delete"
import Read from "./components/Read"
import Create from "./components/Create"
import Update from "./components/Update"

function App() {
 return (
  <UserProvider>
   <ProductProvider>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/delete/:id" element={<Delete />} />
      <Route path="/read/:id" element={<Read />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/create" element={<Create />} />
     </Routes>
    </BrowserRouter>
   </ProductProvider>
  </UserProvider>
 )
}

export default App
