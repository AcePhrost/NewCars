import Container from "react-bootstrap/Container"

import { Cars } from "./componets/Cars"
import Header from "./componets/Header"

export default function app(){

    return ( 
      <Container fluid data-bs-theme='dark' className='app'>
        <Header/>

        <Cars></Cars>
      </Container>  
      )
}
