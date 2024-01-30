import Container from "react-bootstrap/Container"

// import { Cars } from "./componets/Cars"
import Header from "./componets/Header"
import Body from "./componets/Body"
import Wheelspin from "./componets/Wheelspin"
// import Register from "./componets/forms/register"

export default function App(){

  return ( 
    <Container fluid data-bs-theme='dark' className='app'>
      <Header/>
      <Body>
        {/* <Cars /> */}
        <Wheelspin />
        {/* <Register /> */}
      </Body>
    </Container>  
  )
}
