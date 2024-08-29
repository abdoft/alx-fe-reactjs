import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth'; // Assuming you have a custom useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

