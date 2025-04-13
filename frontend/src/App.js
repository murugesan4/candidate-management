import React, { useEffect, useState } from 'react';
import { getCandidates } from './services/api';
import CandidateTable from './components/CandidateTable';
import CandidateForm from './components/CandidateForm';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});

  const fetchCandidates = async () => {
    const { data } = await getCandidates();
    setCandidates(data);
  };

  useEffect(() => { fetchCandidates(); }, []);

  const filteredCandidates = candidates.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (!filters.gender || c.gender === filters.gender) &&
    (!filters.experience || c.experience === filters.experience)
  );

  const handleFilter = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className='m-2 d-flex flex-column'>
      <h1>Candidates</h1>
      <SearchBar onSearch={setSearch} />
      <FilterPanel onFilter={handleFilter} />
      <CandidateForm onAdd={fetchCandidates} />
      <CandidateTable candidates={filteredCandidates} />
      
    </div>
  );
}

export default App;
