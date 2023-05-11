import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const register = async() =>{
        console.log(username,email,password);
        try {
            const result = await axios.post('http://localhost:4350/register',{
                username,email, password
            })
            if(result.data){
                navigate('/profile')
            }
            else{
                alert("Invalid User");
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} /><br/><br/>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
      <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
      <button onClick={register}>Register</button><br/>
      <Link to='/'>Go To LogIn</Link>
    </div>
  )
}

export default SignUp
