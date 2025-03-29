import React from "react";

function SearchForm({
  query,
  location,
  minRepos,
  onQueryChange,
  onLocationChange,
  onMinReposChange,
  onSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-400 flex flex-col w-1/3 p-12 m-auto"
    >
      <div className="flex flex-col gap-4 pb-12">
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
            onChange={(e) => onQueryChange(e.target.value)}
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
            onChange={(e) => onLocationChange(e.target.value)}
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
            onChange={(e) => onMinReposChange(e.target.value)}
            placeholder="e.g., 10"
            min="0"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
