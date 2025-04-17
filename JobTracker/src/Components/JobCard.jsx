import './JobCard.css';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div>
        <h2 className="job-title">{job.company}</h2>
        <p className="job-details">{job.role} - {job.status}</p>
        <p className="job-date">Applied: {job.date}</p>
      </div>
    </div>
  );
}

export default JobCard;