import './FilterBar.css'; // Import the CSS file

function FilterBar({ setFilter, currentFilter }) {
  const statuses = ['All', 'Applied', 'Interviewing', 'Offer', 'Rejected'];

  return (
    <div className="filter-bar">
      {statuses.map(status => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`filter-button ${currentFilter === status ? 'filter-active' : ''}`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;