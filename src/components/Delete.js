import React, { useContext } from "react"
import { Modal, Button } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { userContext } from "../contexts/userContext"

function Delete() {
 const { id } = useParams()
 const [users, setUsers] = useContext(userContext)

 const handleDelete = (id) => {
  //const oldUsers = [...users]
  const remainingUsers = users.filter((user) => user.id != id)
  setUsers(remainingUsers)
 }
 return (
  <Modal.Dialog>
   <Modal.Header>
    <Modal.Title className="text-danger">Are you sure?</Modal.Title>
   </Modal.Header>

   {/* <Modal.Body>
    <p>Modal body text goes here.</p>
   </Modal.Body> */}

   <Modal.Footer>
    <Link to="/">
     <Button variant="secondary">Cancel</Button>
    </Link>
    <Link to="/">
     <Button onClick={() => handleDelete(id)} variant="primary">
      Delete
     </Button>
    </Link>
   </Modal.Footer>
  </Modal.Dialog>
 )
}

export default Delete
