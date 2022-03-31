import React, { useContext, useState } from "react"
import { Form, Button, Container, Row } from "react-bootstrap"
import { userContext } from "../contexts/userContext"
import { useParams } from "react-router"
import { Navigate, useNavigate } from "react-router-dom"

function Update() {
 const { id } = useParams()
 const [users, setUsers] = useContext(userContext)
 const onEditUser = users.filter((user) => user.id == id)

 //const { name, age, email } = onEditUserData
 const [name, setName] = useState(onEditUser[0].name)
 const [age, setAge] = useState(onEditUser[0].age)
 const [email, setEmail] = useState(onEditUser[0].email)
 const navigate = useNavigate()

 const userNameChange = (e) => {
  const newName = e.target.value
  setName(newName)
  onEditUser[0].name = newName
 }
 const userAgeChange = (e) => {
  const newAge = e.target.value
  setAge(newAge)
  onEditUser[0].age = newAge
 }
 const userEmailChange = (e) => {
  const newEmail = e.target.value
  setEmail(newEmail)
  onEditUser[0].email = newEmail
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  if (name && age && email !== null) {
   setUsers([...users])

   //const newUserList = users.concat([newUser])

   //setUsers(newUserList)

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
    <h2 className="text-primary p-4 text-center">User Edit</h2>
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
      Update User
     </Button>
    </Form>
   </Row>
  </Container>
 )
}

export default Update
