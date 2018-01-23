import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = (props) => (
  <div className="movie-list">
    <h4>{props.title}</h4>
    {props.movies.map((movie) =>
      <MovieListEntry movie={movie} onSelect={props.onSelect} symbol={props.symbol} key={props.movies.indexOf(movie)}/>
    )}
  </div>
);


export default MovieList;
