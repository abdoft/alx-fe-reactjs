import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the function

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Set the user data
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        GitHub User Search
      </h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            GitHub Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      {userData && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-sm">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-16 h-16 rounded-full"
          />
          <h3 className="mt-2 text-xl font-semibold">{userData.login}</h3>
          <p>Location: {userData.location || "Not provided"}</p>
          <p>Repositories: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;