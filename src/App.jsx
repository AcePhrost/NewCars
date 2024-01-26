import Container from "react-bootstrap/Container"

import { cars } from "./componets/cars"
import Header from "./componets/Header"

export default function app(){

    return ( 
      <Container fluid data-bs-theme='dark' className='app'>
        <Header/>

        <cars></cars>
      </Container>  
      )
}
