import React,{useState} from 'react';
import './searchBar.css'; // Import CSS for search bar styles
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={faSearch} className="search-icon" />*/
const SearchBar = ({setSearchText}) => {
    
//sdsdsjdjsd
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Order ID"
        onChange={(e)=>setSearchText(e.target.value)}
        
      />
      
    </div>
  );
};

export default SearchBar;
