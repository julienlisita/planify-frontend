import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({onSearch}) => {

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit =  async (e) => {
    e.preventDefault(); 
    setError('')
    try {
      await onSearch(value);  
    } catch (err) {
      setError(err.message);  
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex items-center border border-taupe rounded-full bg-white w-96 px-2">
      <input
        type="text"
        placeholder="Rechercher des recettes..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-transparent placeholder-taupe placeholder-opacity-50 px-4 py-2 flex-grow focus:outline-none text-black"
      />
      <button
        type="submit"
        className="px-2 py-2 text-white bg-brownSugar hover:bg-mossGreen transition rounded-full focus:outline-none"
        aria-label="Rechercher"
      >
        <FaSearch size={18} />
      </button>
    </form>
  );
};

export default SearchBar;