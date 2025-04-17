import { useState } from 'react';
import './JobForm.css';

function JobForm({ onAddJob }) {
  const [formData, setFormData] = useState({ company: '', role: '', status: 'Applied', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddJob(formData);
    setFormData({ company: '', role: '', status: 'Applied', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input
        type="text"
        placeholder="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        className="form-input"
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        className="form-select"
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="form-input"
      />
      <button type="submit" className="form-button">
        Add Job
      </button>
    </form>
  );
}

export default JobForm;