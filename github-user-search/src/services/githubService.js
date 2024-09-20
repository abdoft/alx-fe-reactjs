import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  // Build the query string for the API call
  let query = "";

  if (username) {
    query += `${username} in:login`;
  }

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  try {
    // Make the API call using Axios
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data; // Return the response data
  } catch (error) {
    throw new Error("Error fetching users");
  }
};