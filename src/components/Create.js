import React, { useContext, useState } from "react"
import { Form, Button, Container, Row } from "react-bootstrap"
import { userContext } from "../contexts/userContext"
import { Navigate, useNavigate } from "react-router-dom"

function Create() {
 const [name, setName] = useState("")
 const [age, setAge] = useState("")
 const [email, setEmail] = useState("")
 const navigate = useNavigate()
 const [users, setUsers] = useContext(userContext)
 const userNameChange = (e) => {
  setName(e.target.value)
 }
 const userAgeChange = (e) => {
  setAge(e.target.value)
 }
 const userEmailChange = (e) => {
  setEmail(e.target.value)
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  if (name && age && email !== null) {
   const id = users.length + 1
   const newUser = {
    id,
    name,
    age,
    email,
   }

   const newUserList = users.concat([newUser])

   setUsers(newUserList)

   //Clear all fields after submit
   setName("")
   setAge("")
   setEmail("")
   navigate("/")
  } else {
   alert("All fields required")
  }
 }

 return (
  <Container>
   <Row>
    <h2 className="text-primary p-4 text-center">Add a new user</h2>
    <Form onSubmit={handleSubmit}>
     <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control
       required
       value={name}
       onChange={userNameChange}
       type="text"
       placeholder="User Name"
      />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicAge">
      <Form.Label>Age</Form.Label>
      <Form.Control
       onChange={userAgeChange}
       value={age}
       type="text"
       placeholder="e.g: 34"
      />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
       onChange={userEmailChange}
       value={email}
       type="email"
       placeholder="User Email"
      />
     </Form.Group>
     <Button variant="primary" type="submit">
      Create User
     </Button>
    </Form>
   </Row>
  </Container>
 )
}

export default Create
