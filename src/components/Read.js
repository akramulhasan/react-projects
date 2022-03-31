import React, { useContext } from "react"
import "./Read.css"
import { useParams } from "react-router"
import { userContext } from "../contexts/userContext"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Read() {
 const [users, setUsers] = useContext(userContext)

 const { id } = useParams()
 const user = users.filter((user) => user.id == id)
 const { name, email, age } = user[0]
 return (
  <Container>
   <Row>
    <Col>
     <h2 className="text-primary p-4 text-center">Details</h2>
     <h4>Name: {name}</h4>
     <h4>Email: {email}</h4>
     <h4>Age: {age}</h4>
     <Link to="/">
      <Button className="align-center me-2 text-center" variant="primary">
       Back to list
      </Button>
     </Link>
    </Col>
   </Row>
  </Container>
 )
}

export default Read
