import React from 'react';

const SearchBar = () => (
  <div className="searchbar">
    <div className="search-left">
      <p>Latest Video Form VideosTube</p>
    </div>
    <div className="search-right">
      <form>
        <input type="text"/><input type="submit" value="" />
      </form>
    </div>
    <div className="clear"> </div>
  </div>
);

export default SearchBar;