// LoginForm.js
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ signup }) => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      alert('Please enter a username.');
      return;
    }

    if (signup) {
      userSignup(username);
    } else {
      login(username);
    }

    history.push('/tasks');
  };

  return (
    <div>
      <h2>{signup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">{signup ? 'Sign Up' : 'Login'}</button>
      </form>
    </div>
  );
};

export default LoginForm;
