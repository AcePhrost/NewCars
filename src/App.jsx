import Container from "react-bootstrap/Container"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { Cars } from "./componets/Cars"

import Header from "./componets/Header"
import Body from "./componets/Body"
import Wheelspin from "./componets/Wheelspin"
import Register from "./componets/forms/register"
import Login from "./componets/forms/Login";
import { Cars } from "./componets/Cars";

export default function App(){

  return ( 
    <Container fluid data-bs-theme='dark' className='app'>
      <Header/>
      <Body>
        <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Cars" element={<Cars/>}/>
          <Route path="/Wheelspin" element={<Wheelspin/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </Router>
      </Body>
    </Container>  
  )
}
