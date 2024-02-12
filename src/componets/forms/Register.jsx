import { useState } from "react"

export default function Register() {

  const [ user, setUser ] =  useState({username: '', email: '', password:''}) 

  async function registerUser(){
   console.log("registerUser:", user);
    const res = await fetch('http://127.0.0.1:5000/api/user',
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    });
    const json = await res.json();
    setUser({username: '', email: '', password:''})
    console.log(json);
  }

  function newSubmit(e){
    e.preventDefault()
    console.log(user);
    registerUser();
    
  }

  return (
    <>
      <h3>Register</h3>
        <form action="" onSubmit={newSubmit}>
          <label htmlFor="username">Username</label><br />
          <input type="text" name='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value})}/><br />
          <label htmlFor="email">Email</label><br />
          <input type="email" name='email' value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})}/><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" name='password' value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})}/><br />
          <input type="Submit"/>
        </form>
    
    </>
  )
}
