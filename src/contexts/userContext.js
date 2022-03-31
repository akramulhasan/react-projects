import React, { createContext, useState } from "react"
export const userContext = createContext()

export const UserProvider = (props) => {
 const [users, setUsers] = useState([
  { id: 1, name: "Abullah", age: 34, email: "abdullah@gmail.com" },
  { id: 2, name: "Abdur Rahman", age: 23, email: "abdrahman@gmail.com" },
  { id: 3, name: "Abdus Samad", age: 31, email: "samad@gmail.com" },
 ])

 return (
  <userContext.Provider value={[users, setUsers]}>
   {props.children}
  </userContext.Provider>
 )
}
