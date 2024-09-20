import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to fetch user data by username
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : 'Error fetching data');
    }
};

// Function to search for users by query, including location and minimum repos
export const fetchUsersByQuery = async (query, location = '', minRepos = 0) => {
    try {
        // Construct the query string with additional filters
        let fullQuery = query;
        if (location) {
            fullQuery += ` location:${location}`;
        }
        if (minRepos) {
            fullQuery += ` repos:>${minRepos}`;
        }

        // API endpoint for searching users
        const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(fullQuery)}`);
        return response.data.items; // Return the array of user items
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : 'Error fetching data');
    }
};

