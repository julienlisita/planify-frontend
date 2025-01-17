// useSearch.js
import { useState } from 'react';

const useSearch = () => {
  const [query, setQuery] = useState('');
  
  const search = (value) => {
    setQuery(value);
    alert(`recherche en cours pour ${query}`);
  };

  return {search};
};

export default useSearch;