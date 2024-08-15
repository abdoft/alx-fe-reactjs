import React from 'react';

const UserProfile = (props) => {
    return (
        <div>
            ["useContext", "UserContext"]
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
