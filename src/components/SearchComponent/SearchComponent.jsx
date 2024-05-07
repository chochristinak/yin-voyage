import { useState, useEffect} from "react";
import "./SearchComponent.css";
import DatePicker from "../../components/DatePicker/DatePicker";
import * as retreatsAPI from "../../utilities/retreats-api";


export default function SearchComponent({ retreats }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateTerm, setDateTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(function() {
  //   async function getRetreats() {
  //     const retreats = await retreatsAPI.getAll();
  //     setSearchResults(retreats)
  //     console.log(retreats)
  //   } 
  //   getRetreats();
  // },[])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm || dateTerm) {
      const results = retreats.filter(
        (retreat) =>
          retreat.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          retreat.date.includes(dateTerm)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
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
          placeholder="Look for suggestions..."
        />
        <DatePicker
          className="search-bar-date"
          selected={dateTerm}
          onChange={handleDateChange}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          {searchResults.map((result, index) => (
            <div key={index} className="search-bar-results">
              <h3>{result.title}</h3>
              <p>{result.location}</p>
              <p>{result.date}</p>
              {/* // link to see retreat locations // */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
