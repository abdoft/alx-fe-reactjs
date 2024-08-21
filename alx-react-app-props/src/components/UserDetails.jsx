<<<<<<< HEAD
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

=======
import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext);
>>>>>>> 9d606d3 (second commit)
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

<<<<<<< HEAD
export default UserDetails;
=======
export default UserDetails;
>>>>>>> 9d606d3 (second commit)
