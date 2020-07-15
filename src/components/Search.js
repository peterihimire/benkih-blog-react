import React from "react";

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
          <button className="btn search-btn">search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
