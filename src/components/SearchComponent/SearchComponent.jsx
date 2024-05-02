import { useState } from 'react';
import './SearchComponent.css'

export default function SearchComponent({ retreats }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit =  event => {
    event.preventDefault(); 

    if (searchTerm) {
      const results = retreats.filter(retreat =>
        retreat.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults()
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="search-bar"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search by location"
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          {searchResults.map((result, index) => (
            <div key={index} className="search-bar-results">
              <h3>{result.name}</h3>
              <p>{result.location}</p>
              {/* // link to see retreat locations // */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
}
