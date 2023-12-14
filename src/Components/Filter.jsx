// src/components/Filter.js
import React from 'react';
import { Label } from 'reactstrap';

const Filter = ({ onFilter }) => {

  return (
    <>
    <div className='d-flex align-items-center justify-content-center'>
      <Label>Filter: </Label>
      <select onChange={(e) => onFilter(e.target.value)} className='select-input'>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    </>
  );
};

export default Filter;
