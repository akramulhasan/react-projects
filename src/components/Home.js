import React, { useContext } from "react"
import { userContext } from "../contexts/userContext"
import { productContext } from "../contexts/productContext"
import { Table, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function Home() {
 const [users, setUsers] = useContext(userContext)
 const usersCopy = [...users]
 const reversedUsersArr = usersCopy.reverse()
 return (
  <Container>
   <Row>
    <h2 className="text-primary p-4 text-center">User List</h2>
    <Table striped bordered hover>
     <thead>
      <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Age</th>
       <th>Email</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {reversedUsersArr.map((user) => (
       <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>
         <Link to={`/read/` + user.id}>
          <Button className="me-2" variant="success">
           Read
          </Button>
         </Link>
         <Link to={`/update/` + user.id}>
          <Button className="me-2" variant="primary">
           Edit
          </Button>
         </Link>
         <Link to={`/delete/` + user.id}>
          <Button className="me-2" variant="danger">
           Delete
          </Button>
         </Link>
        </td>
       </tr>
      ))}
     </tbody>
    </Table>
    <Link to="/create">
     <Button className="me-2" variant="primary">
      Create User
     </Button>
    </Link>
   </Row>
  </Container>
 )
}

export default Home
