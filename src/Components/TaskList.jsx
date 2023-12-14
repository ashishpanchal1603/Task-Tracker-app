// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.description} - {task.status}
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onToggle(task.id)}>Toggle Status</button>
          <button onClick={() => onToggle(task.id)}>Edit</button>
          
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
