// src/services/githubService.js
import axios from 'axios';

const GITHUB_SEARCH_API_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (username, location, minRepos) => {
  const query = [
    username && `user:${username}`,
    location && `location:${location}`,
    minRepos && `repos:>${minRepos}`,
  ]
    .filter(Boolean)
    .join('+');

  const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}`);
  return response.data;
};
