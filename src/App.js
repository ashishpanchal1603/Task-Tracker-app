import React, {  useState } from 'react';
import Header from './Components/Header.jsx';


const App = () => {
  const storedUser = localStorage.getItem('user');
  const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
  const storedTasks = storedUsers[storedUser] || [];

  const [user, setUser] = useState(storedUser);
  const [users, setUsers] = useState(storedUsers);
  const [tasks, setTasks] = useState(storedTasks);

  const login = (username) => {
    setUser(username);

    if (!users[username]) {
      setUsers({ ...users, [username]: [] });
    }

    localStorage.setItem('user', username);
    localStorage.setItem('users', JSON.stringify(users));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const signup = (username) => {
    if (!users[username]) {
      login(username);
    }
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task }]);
    setUsers({ ...users, [user]: [...tasks, { ...task }] });

    localStorage.setItem('tasks', JSON.stringify([...tasks, { ...task }]));
    localStorage.setItem('users', JSON.stringify(users));
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );

    setTasks(updatedTasks);
    setUsers({ ...users, [user]: updatedTasks });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    localStorage.setItem('users', JSON.stringify(users));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(updatedTasks);
    setUsers({ ...users, [user]: updatedTasks });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    localStorage.setItem('users', JSON.stringify(users));
  };

  const filterTasks = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
        <div className="App">
          <Header />
        </div>
  );
};

export default App;
