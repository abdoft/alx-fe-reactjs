import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';

const isAuthenticated = false;
<Route
  path="/profile/*"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  }
/>

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />{/*Dynamic Route */}

      </Routes>
    </Router>
  );
}

export default App;
