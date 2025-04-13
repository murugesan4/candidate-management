import React from 'react';

const FilterPanel = ({ onFilter }) => {
  const handleChange = e => onFilter(e.target.name, e.target.value);

  return (
    <div>
      <select name="gender" onChange={handleChange}>
        <option value="">All Genders</option>
        <option>Male</option><option>Female</option><option>Other</option>
      </select>
      <select name="experience" onChange={handleChange}>
        <option value="">All Experience</option>
        <option>1 Year</option><option>2 Years</option><option>3 Years +</option>
      </select>
    </div>
  );
};

export default FilterPanel;
