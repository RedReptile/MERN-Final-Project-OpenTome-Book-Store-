import React from 'react';
import { Navigate } from 'react-router-dom';

// Helper function to get user role from localStorage
const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.role : null;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const role = getUserRole();
  
  // Check if the user is an admin
  if (role !== 'admin') {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
