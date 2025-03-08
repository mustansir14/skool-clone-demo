import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search groups..."
      className="w-full p-2 border border-gray-300 rounded mb-4"
    />
  );
};

export default SearchBar;
