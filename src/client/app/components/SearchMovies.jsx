import React from 'react';

const SearchMovies = (props) => (
  <div className="search-bar form-inline">
    <h4>Search your collection</h4>
    <textarea className="form-control" type="text" rows="1" placeholder="What movie are you looking for?" onChange={(event) => props.onTextEntryHandleChange(event)}></textarea>
  </div>
);

export default SearchMovies;
