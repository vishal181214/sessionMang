import React, { useState } from 'react'

function Register() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const register = () =>{
        console.log(username,email,password);
    }
  return (
    <div>
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} /><br/><br/>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
      <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
      <button onClick={register}>Register</button>
    </div>
  )
}

export default Register
