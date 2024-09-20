// src/services/githubAPI.js
import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchGitHubUser = async (username) => {
  const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
  });
  return response.data;
};
