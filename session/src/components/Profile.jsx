import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

function Profile() {
  const cookieValue = Cookies.get('password');
  console.log(cookieValue);
  const navigate = useNavigate();
  const doSomething = async() =>{
    try {
      const result = await axios.get('http://localhost:4350/logout')
      if(!result.data){
          navigate('/')
      }
  } catch (error) {
      console.log(error);
  }
    navigate('/')
  }
  return (
    <div>
      <h1>Welcome user</h1>
      <button onClick={doSomething}>LogOut</button>
    </div>
  )
}

export default Profile
