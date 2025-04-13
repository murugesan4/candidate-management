import React, { useState } from 'react';
import { addCandidate } from '../services/api';

const CandidateForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', gender: 'Male', experience: '1 Year', skills: []
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = e => {
    const skills = e.target.value.split(',');
    setFormData(prev => ({ ...prev, skills }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addCandidate(formData);
    onAdd();
  };

  return (
    <div className='mt-3 d-flex flex-column'>
      <h5>Add Candidate</h5>
    <form onSubmit={handleSubmit}>
      <input className='m-1' name="name" placeholder="Candidates Name" onChange={handleChange} required />
      <input className='m-1' name="email" placeholder="Email" onChange={handleChange} required />
      <input className='m-1' name="phone" placeholder="Phone" onChange={handleChange} required />
      <input className='m-1' name="higherQualification" placeholder="Higher Qualification" onChange={handleChange} required />
      
      <select name="gender" onChange={handleChange}>
        <option>Male</option><option>Female</option><option>Other</option>
      </select>
      <select name="experience" onChange={handleChange}>
        <option>1 Year</option><option>2 Years</option><option>3 Years +</option>
      </select>
      <input className='m-1' name="skills" placeholder="Skills/Technology" onChange={handleSkillsChange} />
      
      <button className='m-1 bg-success' type="submit">Add Candidate</button>
    </form>
    </div>
  );
};

export default CandidateForm;
