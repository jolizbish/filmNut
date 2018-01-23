import React from 'react';

const MovieListEntry = (props) => (
  <div>
    <div className="movie-list-button" onClick={() => props.onSelect(props.movie)}>
      <div className="line-item button"><p className="button">{props.symbol}</p></div>
    </div>
    <div className="movie-list-entry">
      <div className="line-item movie"><p>{props.movie.title}, {props.movie.year}</p></div>
    </div>
  </div>
);

export default MovieListEntry;
