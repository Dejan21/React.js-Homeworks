import React from 'react';

const showMessage = () => console.log('clicked on the button')

const MyFunctionalCom = (props) => {
    return (
        <div className="MyFunctionalCom">
            <button onClick={showMessage}>Click me</button>
        </div>
    );
};

export default MyFunctionalCom;