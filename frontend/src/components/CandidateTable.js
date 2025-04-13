import React from 'react';

const CandidateTable = ({ candidates }) => {
  return (
    <div className='d-flex flex-column'>
      <h5 className='mt-3'>Candidate List</h5>

    <table>
      <thead>
        <tr className='bg-secondary'>
          <th>Candidate Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Higher Qualification</th>
          <th>Gender</th>
          <th>Experience</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate, index) => (
          <tr key={index}>
            <td>{candidate.name}</td>
            <td>{candidate.email}</td>
            <td>{candidate.phone}</td>
            <td>{candidate.higherQualification}</td>
            <td>{candidate.gender}</td>
            <td>{candidate.experience}</td>
            <td>{candidate.skills.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default CandidateTable;
