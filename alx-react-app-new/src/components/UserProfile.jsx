
import React from 'react';

const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h2 style={{ color: 'blue' }}>{props.name}</h2>
            <p style={{color: 'pink', fontSize: '20px'}}>Age: <span style= {{ fontWeight : 'bold'}}>{props.age}</span></p>
            <p style={{color: 'purple', fontSize: '20px'}}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
