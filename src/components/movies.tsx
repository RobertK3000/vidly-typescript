import * as React from 'react';
import { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";


interface MoviesProps {
  _id?: string,
  title?: string,
  genre?: GenreProps,
  numberInStock?: number,
  dailyRentalRate?: number,
  publishedDate?: string,
  liked?: boolean
}

interface GenreProps {
  _id: string,
  name: string,
}
 
interface MoviesState {
  movies: MoviesProps[]
  genres: GenreProps[]
}
 
class Movies extends React.Component<MoviesProps, MoviesState> {
  state: MoviesState = { 
    movies: getMovies(),
    genres: getGenres()
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