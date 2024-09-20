import React, { useState } from 'react';
import { fetchAdvancedSearchResults } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSearchResults([]);
    setPage(1);

    try {
      const data = await fetchAdvancedSearchResults({ username, location, minRepos, page: 1 });
      setSearchResults(data.items);
      setTotalCount(data.total_count);
    } catch (err) {
      setError('Something went wrong with the search.');
    } finally {
      setLoading(false);
    }
  };

  const loadMoreResults = async (newPage) => {
    setLoading(true);

    try {
      const data = await fetchAdvancedSearchResults({ username, location, minRepos, page: newPage });
      setSearchResults(data.items);
      setPage(newPage);
    } catch (err) {
      setError('Something went wrong while loading more results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      <div className="mt-4 space-y-4">
        {searchResults.map((user) => (
          <div key={user.id} className="p-4 border rounded flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="font-bold">{user.login}</h2>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {totalCount > searchResults.length && (
        <div className="mt-4 flex justify-between">
          {page > 1 && (
            <button
              onClick={() => loadMoreResults(page - 1)}
              className="p-2 bg-gray-500 text-white rounded"
            >
              Previous
            </button>
          )}
          <button
            onClick={() => loadMoreResults(page + 1)}
            className="p-2 bg-gray-500 text-white rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
