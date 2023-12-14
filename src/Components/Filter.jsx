// src/components/Filter.js
import React from 'react';

const Filter = ({ onFilter }) => {
  return (
    <div>
      <label>Filter: </label>
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default Filter;
