import React from 'react';

const Card = ({children,title}) => {
    return (
        <div className="Card">
            <h2>{title}</h2>
            {children}
            
        </div>
    );
};

export default Card;