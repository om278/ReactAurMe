import { useState, useEffect } from 'react';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import FilterBar from './Components/FilterBar';
import './App.css'; 

function App() {
  const [jobs, setJobs] = useState(() => JSON.parse(localStorage.getItem('jobs')) || []);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (newJob) => {
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
  };

  const filteredJobs = filter === 'All'  ? jobs : jobs.filter((job) => job.status === filter);

  return (
    <div className="app-container">
      <h1 className="app-title">Job Tracker</h1>
      <div className="form-section">
        <JobForm onAddJob={addJob} />
      </div>
      <div className="filter-section">
        <FilterBar setFilter={setFilter} currentFilter={filter} />
      </div>
      <JobList jobs={filteredJobs} />
    </div>
  );
}

export default App;