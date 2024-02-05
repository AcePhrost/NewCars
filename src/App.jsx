import Container from "react-bootstrap/Container"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { Cars } from "./componets/Cars"

import Header from "./componets/Header"
import Body from "./componets/Body"
import Wheelspin from "./componets/Wheelspin"
import Register from "./componets/forms/register"

export default function App(){

  return ( 
    <Container fluid data-bs-theme='dark' className='app'>
      <Header/>
      <Body>
        <Router>
        <Routes>
          <Route path="/Wheelspin" element={<Wheelspin/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </Router>
      </Body>
    </Container>  
  )
}
