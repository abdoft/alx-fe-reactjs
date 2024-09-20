import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState(""); // Stores the search input
  const [userData, setUserData] = useState(null); // Stores the result from the API
  const [loading, setLoading] = useState(false); // Tracks if the API call is loading
  const [error, setError] = useState(""); // Stores any error message

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Store the result in the state
    } catch (err) {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h3>{userData.name || "No name provided"}</h3>
          <p>Username: {userData.login}</p> {/* Display the "login" field */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
