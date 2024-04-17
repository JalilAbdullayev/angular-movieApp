import {Component} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieRepository} from "../models/movie.repository";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  /*movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4'];*/
  movies: Movie[];
  movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
  }
}
