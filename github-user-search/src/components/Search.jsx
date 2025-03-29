// src/components/Search.jsx
import React, { useState } from "react";
import { searchUsersAdvanced } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (newSearch = true) => {
    setLoading(true);
    setError(false);

    try {
      const data = await searchUsersAdvanced({ query, location, minRepos });
      const detailedUsers = await Promise.all(
        data.items.map(async (user) => {
          const userDetails = await fetchUserData(user.login);
          return userDetails;
        })
      );
      setUsers(newSearch ? data.items : [...users, ...data.items]);
      setHasMore(data.total_count > page * 10);
      if (newSearch) setPage(1);
    } catch (err) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setPage((prev) => prev + 1);
    await handleSearch(false);
  };

  return (
    <div className="space-y-4 p-4 bg-gray-100 rounded-lg w-1/3 p-12 m-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex md:flex-col flex-row gap-4"
      >
        <div className="flex-1">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter GitHub username..."
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., San Francisco"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="minRepos"
            className="block text-sm font-medium text-gray-700"
          >
            Min Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g., 10"
            min="0"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="mt-6 sm:mt-0 sm:self-end px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && (
        <p className="text-center text-red-600">
          Looks like we cant find the user
        </p>
      )}
      {users.length > 0 && (
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {user.login}
                </h3>
                <p className="text-sm text-gray-600">
                  Repositories: {user.public_repos || "N/A"} • Location:{" "}
                  {user.location || "N/A"}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
          {hasMore && (
            <button
              onClick={loadMore}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Load More
            </button>
          )}
        </div>
      )}
      {!loading && !error && users.length === 0 && (
        <p className="text-center text-gray-600">
          No results yet. Try searching!
        </p>
      )}
    </div>
  );
}

export default Search;
