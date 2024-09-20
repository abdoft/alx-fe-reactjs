import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [page] = useState(1); // Fixed page for now

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const fetchedUsers = await fetchUserData(search, location, minRepos, page);
      if (fetchedUsers.length === 0) {
        setError('No users found matching the criteria.');
      } else {
        setUsers(fetchedUsers);
      }
    } catch (err) {
      setError('Looks like we cant find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mr-auto ml-auto mb-4 bg-white w-1/2 p-4">
        <input
          className="mt-8 mr-auto ml-auto mb-4 block h-8 w-2/3 border border-gray-400"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search GitHub Users..."
        />
        <input
          className="block mr-auto ml-auto h-8 w-2/3 border border-gray-400"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <input
          className="mt-2 block mr-auto ml-auto h-8 w-2/3 border border-gray-400"
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repository Count"
        />
        <button
          type="submit"
          className="block mr-auto ml-auto mt-4 mb-4 bg-blue-300 py-1 px-3 hover:bg-blue-400 active:opacity-95"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id} className="my-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                width="150"
                className="mr-auto ml-auto"
              />
              <h2 className="">{user.login}</h2>
              <p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-red-300"
                >
                  Visit GitHub Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
      {users.length === 0 && !loading && <p>No users found matching the criteria.</p>}
    </div>
  );
}

export default Search;