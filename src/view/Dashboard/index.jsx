import React ,{useState}from 'react'
import TaskForm from '../../Components/TaskForm'
import TaskList from '../../Components/TaskList'
import Filter from '../../Components/Filter'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardIndex() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [taskUpdate,setTaskUpdate] = useState("")
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const users = JSON.parse(localStorage.getItem('user'))
  const isExitUser = users?.find((data)=>data?.username === currentUser?.username)

  useEffect(()=>{
    if(!isExitUser){
      navigate("/auth/login")
    }
  },[isExitUser])


  useEffect(()=>{
    if (isExitUser?.tasks) {
      setTasks([...isExitUser?.tasks])
    }      
},[])



const handleAddTask = (task) => {
  // Check if taskUpdate is defined to determine if it's an update or addition
  if (taskUpdate) {
    // Update existing task
    const updatedTasks = tasks.map((t) => (t.id === taskUpdate.id ? { ...task } : t));
    setTasks(updatedTasks);
    const updatedUsers = users.map((user) => {
      if (user.username === currentUser.username) {
        return {
          ...currentUser,
          tasks: updatedTasks,
        };
      } else {
        return user;
      }
    });
    localStorage.setItem('user', JSON.stringify(updatedUsers));
  } else {
    // Add new task
    const newTask = { ...task, id: Date.now() };
    const updatedTasks = [...tasks, newTask];
    console.log('updatedTasks', updatedTasks)
    setTasks(updatedTasks);

    const updatedUsers = users.map((user) => {
      if (user.username === currentUser.username) {
        console.log("hello")
        return {
          ...currentUser,
          tasks: updatedTasks,
        };
      } else {
        return user;
      }
    });
    localStorage.setItem('user', JSON.stringify(updatedUsers));
  }
};

  const handleDeleteTask = (taskId) => {
    const taskss = tasks.filter((task) => task.id !== taskId)
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

  const editTask = (data)=>{
    setTaskUpdate(data)
  }
  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);
  return (
    <>
          <h1 className='d-flex align-items-center justify-content-center mt-4'>Welcome Track app!</h1>
          <Filter onFilter={handleFilterChange} />
          <TaskForm onSubmit={handleAddTask} tasksDetails ={taskUpdate} taskUpdate={taskUpdate}/>
          <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} onToggle={handleToggleStatus} onEdit={editTask}/>
    </>
  )
}

export default DashboardIndex
