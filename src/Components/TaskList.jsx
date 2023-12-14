// src/components/TaskList.js
import React from 'react';
import { Button } from 'reactstrap';

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <>
    {tasks?.length &&
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Toggle Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                {task.title}
              </td>
              <td>
                {task.description}
              </td>
              <td>
                {task.status}
              </td>
              <td>
                <Button color='danger' onClick={() => onDelete(task.id)}>Delete</Button>
              </td>
              <td>
                <Button color='info' onClick={() => onToggle(task.id)}>Toggle Status</Button>
              </td>
              <td>
                <Button color='success' onClick={() => onEdit(task)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>}


    </>
  );
};

export default TaskList;
