import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Profile from './components/Profile.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
