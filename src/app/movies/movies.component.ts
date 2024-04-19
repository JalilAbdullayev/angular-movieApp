import {Component} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieRepository} from "../models/movie.repository";

declare let alertify: any;

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  title = 'Movies List';
  movies: Movie[];
  filteredMovies: Movie[];
  movieRepository: MovieRepository;

  filterText: string = '';

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.filteredMovies = this.movies;
  }

  onInputChange() {
    this.filteredMovies = this.filterText ?
      this.movies.filter(m => m.title.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1 ||
        m.description.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1) : this.movies;
  }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Remove from List';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      alertify.success(movie.title + ' has been added to your list!');
    } else {
      $event.target.innerText = 'Add to List';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      alertify.error(movie.title + ' has been removed from your list!');
    }
  }
}
