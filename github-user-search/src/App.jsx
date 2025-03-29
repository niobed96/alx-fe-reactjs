import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearchResults = (results) => {
    setUsers(results);
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearchResults={handleSearchResults} />
      <div className="results">
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No results yet. Try searching for a GitHub user!</p>
        )}
      </div>
    </div>
  );
}

export default App;
