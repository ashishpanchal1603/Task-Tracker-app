// src/components/TaskForm.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Input, Label, FormGroup } from 'reactstrap';

const TaskForm = ({ onSubmit, tasksDetails, taskUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState("Pending");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus("")
  };


  useEffect(() => {
    if (tasksDetails) {
      setTitle(tasksDetails?.title)
      setDescription(tasksDetails?.description)
      setStatus(tasksDetails?.status)
    }
  }, [tasksDetails])
  return (
    <>
      <div className='form-container w-100'>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label className='match-edit-label' for="Name" >
              Select Status
            </Label>
            <Input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-1'
            />
          </FormGroup>
          <FormGroup>

            <Label htmlFor="">Select Status</Label>
            <select id="status" name="status" className='mt-3' value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pending">Pending</option>
              <option value="completed">completed</option>
            </select>
          </FormGroup>
          <FormGroup>

            <Input
              type="text"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='mt-3'
            />
          </FormGroup>
          <Button type="submit" color="primary" className='mt-3'>{taskUpdate ? "Edit Task" : "Add Task"}</Button>
        </form>
      </div>

    </>

  );
};

export default TaskForm;
