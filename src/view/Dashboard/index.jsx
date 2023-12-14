import React ,{useState}from 'react'
import TaskForm from '../../Components/TaskForm'
import TaskList from '../../Components/TaskList'
import Filter from '../../Components/Filter'
import { useEffect } from 'react';

function DashboardIndex() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))


  const task = JSON.parse(localStorage.getItem("user"))
  useEffect(()=>{
      const data = task?.find((data)=>data?.username === currentUser?.currentUser)
      setTasks(data)
},[])

  const handleAddTask = (task) => {
    const taskss = [...tasks, { ...task, id: Date.now(), status: 'pending' }]
    setTasks(taskss);
    const users = JSON.parse(localStorage.getItem('user'))
    const updatedUsers = users?.map((user) => {
      if (user.username === currentUser.username) {
        return {
          ...currentUser,
          tasks: taskss
        }
      } else {
        return user
      }
    })
    localStorage.setItem('user', JSON.stringify(updatedUsers))
  };
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const handleToggleStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
      )
    );
  };



  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);
  return (
    <>
          <h1>Welcome!</h1>
          <Filter onFilter={handleFilterChange} />
          <TaskForm onSubmit={handleAddTask} />
          <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} onToggle={handleToggleStatus} />
    </>
  )
}

export default DashboardIndex
