import { useEffect, useState } from "react"

import  Navbar  from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export default function Header() {
  const [user, setUser] = useState();
  useEffect(() => {
    const userId = "9"
    const getUserData= async()=>{
      // userId
        try {
          const resp = await fetch(`http://localhost:5000/api/user/${userId}`);
          const json = await resp.json();
          setUser(json)
        } catch(e) {
          console.log(e)
        }
        
      
    }
    if (userId) {
      getUserData()
    }
  }, [])
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Car Lot</Navbar.Brand>
        </Container>
        {user && <Container style={{ marginLeft: "10px" }}>Tokens: {user.tokens}</Container>}
    </Navbar>
  )
}
