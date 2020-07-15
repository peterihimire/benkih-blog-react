import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <div className="search-center">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search..."
          />
          <button className="btn search-btn">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
