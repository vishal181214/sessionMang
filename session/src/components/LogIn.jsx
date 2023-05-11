import React, { useState } from 'react'

function LogIn() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = () =>{
        console.log(email,password);
    }

  return (
    <div>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleLogIn}>Submit</button>
    </div>
  )
}

export default LogIn
