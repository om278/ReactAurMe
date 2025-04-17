import JobCard from './JobCard';

function JobList({ jobs }) {
  return (
    <div className="mt-6">
      {jobs.length === 0 ? (
        <p >No jobs added yet. Start by adding one above!</p>
      ) : (
        <div >
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default JobList;