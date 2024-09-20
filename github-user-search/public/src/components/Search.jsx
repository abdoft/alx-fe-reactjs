import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Adjust import based on your actual function

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change for all fields
  const handleInputChange = (e) => {
    setUsername (e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true
    setError(null); // Clear any previous error

    try {
      // Fetch advanced user data based on the input criteria
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUserData(data.items); // GitHub Search API returns results under 'items'
    } catch (err) {
      setError("Looks like we cant find the user "); // Set error message
      setUserData([]); // Clear user data on error
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Search GitHub username"
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Location (optional)"
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="Minimum Repositories (optional)"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold">Search Results:</h3>
          <ul className="space-y-4">
            {userData.map((user) => (
              <li key={user.id} className="border p-4 rounded">
                <img src={user.avatar_url} alt="User Avatar" width="50" className="inline-block" />
                <div className="inline-block ml-4">
                  <h4 className="font-bold">{user.login}</h4>
                  {user.location && <p>Location: {user.location}</p>}
                  <p>Repositories: {user.public_repos}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    View GitHub Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
