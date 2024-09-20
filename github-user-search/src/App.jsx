import Header from "./components/Header";
import Search from "./components/Search";

import { useState } from "react";
import { fetchGitHubUser } from "./services/githubService";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (error) {
      console.error("User not found or error occurred");
    }
  };

  return (
    <div>
      <Header />
      <Search />
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      )}
    </div>
  );
}

export default App;
