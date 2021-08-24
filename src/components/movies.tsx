import * as React from 'react';
import { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

export interface MoviesProps {
  
}
 
export interface MoviesState {
  movies: getMovies();
}
 
class Movies extends React.Component<MoviesProps, MoviesState> {
  state = { 
    MoviesState;
   }
  render() { 
    return ( <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        { this.state.movies.map(movie => (
          <tr>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
          </tr>
        ))}
      </tbody>
    </table> 
    );
  }
}
 
export default Movies;