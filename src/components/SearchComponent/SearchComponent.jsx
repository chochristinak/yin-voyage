import { useState, useEffect } from "react";
import "./SearchComponent.css";
import DatePicker from "../../components/DatePicker/DatePicker";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function SearchComponent({ retreats }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateTerm, setDateTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);


useEffect(() => {
  async function getRetreats() {
    try {
      if (searchTerm) {
        const response = await axios.get(`/api/retreats?searchTerm=${searchTerm}`);
        setSuggestions(response.data);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  }
  getRetreats();
}, [searchTerm]);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search based on search term and date term
    // This can be implemented based on your requirements
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar-location"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          placeholder="Try hatha or detox..."
        />
        <DatePicker
          className="search-bar-date"
          selected={dateTerm}
          onChange={handleDateChange}
        />
        <button type="submit">Search</button>
      </form>

      {suggestions.length > 0 && (
        <div>
          {suggestions.map((suggestion, index) => (
            <div key={index} className="search-bar-results">
              <Link to={`/retreats/${suggestion.id}`}>
                <h3>{suggestion.title}</h3>
              </Link>
              <p>{suggestion.location}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
