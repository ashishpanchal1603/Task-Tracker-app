// src/components/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  console.log('showSignUp', showSignUp)
  const userDetails = JSON.parse(localStorage.getItem("user"))
  const handleSignUpSubmit = (username) => {
    setShowSignUp(false);
  };
  const isExit = userDetails?.find((data) => data?.username === username && data?.password === password)
  const handleSignUp = () => {
    // Check if the username is available
    console.log('isExit', isExit)
    if (isExit) {
      alert('Username already exists. Please choose another.');
    } else {
      // Save the new user to localStorage
      if (userDetails) {
        localStorage.setItem("user", JSON.stringify([...userDetails, { username, password }]));
      } else {
        localStorage.setItem("user", JSON.stringify([{ username, password }]));
      }
      navigate("/auth/login");
      handleSignUpSubmit(username);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
