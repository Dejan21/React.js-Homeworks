import React from 'react';

const MyFunctionalComp = (props) => {
 const showMessage = () => console.log('clicked on the button');

    return (
        <div className="MyFunctionalComp">
     <button onClick={showMessage}>Click me</button>
        </div>
    );
};

export default MyFunctionalComp;