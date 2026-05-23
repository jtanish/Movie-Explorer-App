import React, { useState } from "react";
import "./searchBar.css";

function SearchBar({ Search, setSearch }) {
  const [localSearch, setLocalSearch] = useState("Hulk");
  const SubmitMovie = (e) => {
    e.preventDefault();
    setSearch(localSearch);
  };

  return (
    <div>
      <form onSubmit={SubmitMovie}>
        <input
          type="text"
          value={localSearch}
          onChange={(e) => {
            setLocalSearch(e.target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
