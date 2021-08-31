import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="NotFound">
            <p>Error 404- Page you looking for not found.Go back to <Link to='/'>homepage</Link> </p>
        </div>
    );
};

export default NotFound;