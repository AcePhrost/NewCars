import { useState } from "react"
import {decode as base64_decode, encode as base64_encode} from 'base-64';


export default function Login() {

  const [ user, setUser ] =  useState({username: '', email: '', password:''}) 

  async function ExistUser(){
   console.log("ExistUser:", user);
   let auth = base64_encode(user.username + ":" + user.password);
    // const auth = Buffer.from(user.username + ":" + user.password).toString('base64')
    const res = await fetch('http://127.0.0.1:5000/api/user',
    {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Basic "+ auth
      },
    //   body:JSON.stringify(user)
    });
    const json = await res.json();
    setUser({username: '', email: '', password:'', tokens: 5})
    console.log(json);
  }

  function newSubmit(e){
    e.preventDefault()
    console.log(user);
    ExistUser();
    
  }

  return (
    <>
      <h3>Login</h3>
        <form action="" onSubmit={newSubmit}>
          <label htmlFor="username">Username</label><br />
          <input type="text" name='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value})}/><br />
          <label htmlFor="email">Email</label><br />
          <input type="email" name='email' value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})}/><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" name='password' value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})}/><br />
          <input type="submit"/>
        </form>
    
    </>
  )
}