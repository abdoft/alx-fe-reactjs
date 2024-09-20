import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Ensure this path is correct

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login page or another route
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
