import React from 'react';

const EachProduct = ({name, updateCart}) => {
    return (
        <div className="EachProduct">
            <h2>{name}</h2>
            <button onClick={updateCart}>Add to cart</button>
        </div>
    );
};

export default EachProduct;