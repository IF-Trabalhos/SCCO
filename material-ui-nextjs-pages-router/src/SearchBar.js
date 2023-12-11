import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <TextField
      label="Pesquisar"
      variant="outlined"
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
