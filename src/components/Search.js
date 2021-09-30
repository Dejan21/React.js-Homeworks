import React from 'react';

const Search = ({searchQuery, handleQuery}) => {
    return (
        <div className="Search">
        <label htmlFor="search">Search: </label>
        <input type="text" value={searchQuery} onChange={handleQuery} />
        </div>
    );
};

export default Search;