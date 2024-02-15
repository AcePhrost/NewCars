import { useEffect, useState } from "react"

import  Navbar  from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export default function Header() {
  const [user, setUser] = useState();
  useEffect(() => {
    const userId = "9"
    const getUserData= async(id)=>{
      // userId
        
       
        
        try {
          const resp = await fetch(`http://localhost:5000/api/user/${id}`);

          const json = await resp.json();
          console.log("HEADER:", json)
          sessionStorage.setItem("currentUser", JSON.stringify(json))
          setUser(json)
        } catch(e) {
          console.log(e)
        }
        
      
    }
    const temp =sessionStorage.getItem("currentUser");
    if (temp && temp!==undefined) {
      console.log("TEMP", temp)
        const user=JSON.parse(temp)
        getUserData(user.id)
       
     
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
