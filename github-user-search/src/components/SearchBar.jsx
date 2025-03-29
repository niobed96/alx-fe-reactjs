import React, { useState } from "react";

function SearchBar({ onSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const results = await searchUsers(query);
      onSearchResults(results.items); // Pass results to parent component
    } catch (error) {
      onSearchResults([]); // Pass empty array on error
    }
  };
  return (
    <form onSubmit={handleSearch} className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
