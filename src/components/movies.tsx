import * as React from 'react';
import { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like"

interface MoviesProps {
  _id?: string,
  title?: string,
  genre?: GenreProps,
  numberInStock?: number,
  dailyRentalRate?: number,
  publishedDate?: string,
  liked?: boolean | undefined
}

interface GenreProps {
  _id?: string,
  name?: string,
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

  handleDelete = (movie: MoviesProps) => {
    // console.log(typeof movie)
    // console.log(movie)
    // console.log(movie._id)
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie: MoviesProps) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies})
  }

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) 
      return <p> There are no movies in the database</p>;


    return ( 
    <React.Fragment> 
      <p>Showing {count} movies in the database </p>

      <table className="table">

        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          { this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre?.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              {/* <td>{`${movie.liked}`}</td> */}
              <td>
                <Like liked= {movie.liked} onClick={() => this.handleLike(movie)} />
              </td>
              <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>

      </table> 
    </React.Fragment> 
    );
  }
}
 
export default Movies;