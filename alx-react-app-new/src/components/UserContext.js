import React, { createContext } from 'react';

// Create a Context for user data
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
