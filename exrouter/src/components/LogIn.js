import React from 'react';

const LogIn = (props) => {
    return (
        <div className="LogIn">
            <p>Log In</p>
            <input type="text" />
            <br />
            <button onClick={() => props.history.goBack()} >Go back</button>
        </div>
    );
};

export default LogIn;