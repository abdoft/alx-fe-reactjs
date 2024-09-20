// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setLoading(true);
        setError(''); // Clear previous errors
        try {
            const userData = await fetchUserData(username);
            setUser(userData);
        } catch (err) {
            setError("Looks like we can't find the user"); // Specific error message
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        // ... (same as before)
    );
};

export default Search;