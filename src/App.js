// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterRouter from "./Router"

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user and tasks from local storage on component mount
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser.username);
      // Load tasks associated with the user
    }
  }, []);

  useEffect(() => {
    // Save user to local storage whenever user is updated
    if (user) {
      localStorage.setItem('user', JSON.stringify({ username: user }));
    } 
  }, [user]);



  return (
    <>
      <BrowserRouter>
        <div>
          <RouterRouter />
        </div>
      </BrowserRouter>
    </>
  );
};


export default App;
