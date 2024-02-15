import Container from "react-bootstrap/Container"
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
// import { Cars } from "./componets/Cars"

import Header from "./componets/Header"
import Body from "./componets/Body"
import Wheelspin from "./componets/Wheelspin"
import Register from "./componets/forms/register"
import Login from "./componets/forms/Login";
import { Cars } from "./componets/Cars";
import { useState } from "react";

export default function App(){
const [ user, setUser ] =  useState({username: '', email: '', password:''}) 
  localStorage.setItem("API_SERVER_URI", "http://127.0.0.1:5000/api");
  return ( 
    <Container fluid data-bs-theme='dark' className='app'>
      <BrowserRouter> 
      <Header/>
      <Body>
        <Routes>
          <Route path="/Login" element={<Login setUser={setUser}/>}/>
          <Route path="/Cars" element={<Cars user={user}/>}/>
          <Route path="/Wheelspin" element={<Wheelspin/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Body>
      </BrowserRouter>
    </Container>  
  )
}
