import React, { useState } from 'react';

const SearchComponent = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value); // Pass the search query to the parent component
  };

  return (
    <div id="SearchComponentDiv">
      <img src="/svg/search.svg" alt="MedTrackr Logo" id="SearchComponentIcon" />
      <input
        type="text"
        id="SearchComponentInput"
        placeholder="Rechercher"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchComponent;
