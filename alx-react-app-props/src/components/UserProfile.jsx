<<<<<<< HEAD
import React from 'react';

const UserProfile = (props) => {
    return (
        <div>
            ["useContext", "UserContext"]
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
=======
import {useContext} from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
    const userData = useContext(UserContext);
    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
>>>>>>> 9d606d3 (second commit)
        </div>
    );
};

export default UserProfile;
