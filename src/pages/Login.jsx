// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onSignUp() {
      navigate("/auth/signup");
  }

 

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const isExit = storedUser?.find((data)=> data?.username === username  && data?.password === password)
  console.log('isExit', isExit)
  const handleLogin = () => {
    // Check if the user exists in localStorage
    console.log('storedUser', storedUser)
    if (isExit) {
      localStorage.setItem("currentUser", JSON.stringify({username,password}))
      navigate("/dashboard")
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <button onClick={onSignUp}>Sign Up</button>
      </p>
    </div>
  );
};

export default Login;
