// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/add-task">Add Task</Link>
          </li>
            <li>
              <span  style={{ cursor: 'pointer' }}>
                Logout
              </span>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
