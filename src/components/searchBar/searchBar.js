import React, { useState } from 'react';
import './searchBar.css';

// Dummy search items
const dummySearchItems = [
  { id: 1, title: 'Lorem ipsum dolor sit amet', description: 'Consectetur adipiscing elit' },
  { id: 2, title: 'Sed do eiusmod tempor incididunt', description: 'Ut labore et dolore magna aliqua' },
  { id: 3, title: 'Ut enim ad minim veniam', description: 'Quis nostrud exercitation ullamco' },
  { id: 4, title: 'Duis aute irure dolor in reprehenderit', description: 'In voluptate velit esse cillum dolore' },
  { id: 5, title: 'Excepteur sint occaecat cupidatat non proident', description: 'Sunt in culpa qui officia deserunt' },
];

function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    let searchTimeout;
  
    const handleInputChange = (event) => {
      const searchTerm = event.target.value;
      setSearchTerm(searchTerm);
  
      // Clear the previous timeout to debounce the search
      clearTimeout(searchTimeout);
  
      if (!searchTerm.trim()) {
        setSearchResults([]);
        return;
      }

      // Set a new timeout to trigger the search after 2 seconds
      searchTimeout = setTimeout(() => {
        // Filter search items based on the search term
        const filteredResults = dummySearchItems.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
      }, 2000); // 2 seconds delay
    };

  return (
    <div className='SearchComponent' id='SearchComponent'>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className='serviceSearch'
        id='serviceSearch'
      />
      {/* Display search results */}
      <ul className='searchItemPar searchItem' id='searchItemPar'>
        {searchResults.map(item => (
          <li key={item.id}>
            <h3 className='searchItemHead searchItem' id='searchItemHead'>{item.title}</h3>
            <p className='searchItemDesc searchItem' id='searchItemDesc'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
