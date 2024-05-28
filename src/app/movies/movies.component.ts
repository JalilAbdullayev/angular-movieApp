import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {AlertifyService} from "../services/alertify.service";
import {MovieService} from "../services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  title = 'Movies List';
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  userId: string;
  movieList: string[] = [];

  filterText: string = '';
  error: any;

  constructor(private alertify: AlertifyService, private movieService: MovieService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
  }

  loading: boolean = false;


  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.userId = user.id
      this.activatedRoute.params.subscribe(params => {
        this.loading = true;
        this.movieService.getMovies(params['id']).subscribe(data => {
          this.movies = data;
          this.filteredMovies = this.movies;
          this.movieService.getList(this.userId).subscribe(movies => this.movieList = movies);
          this.loading = false;
        }, error => {
          this.error = error
          this.loading = false
        });
      })
    })
  }

  onInputChange() {
    this.filteredMovies = this.filterText ?
      this.movies.filter(m => m.title.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1 ||
        m.description.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1) : this.movies;
  }

  getButtonState(movie: Movie) {
    return this.movieList.findIndex(m => m === movie.id) > -1;
  }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Remove from List';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.movieService.addToMyList({
        userId: this.userId,
        movieId: movie.id
      }).subscribe(() => this.alertify.success(movie.title + ' has been added to your list!'));
    } else {
      $event.target.innerText = 'Add to List';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.movieService.removeFromList({
        userId: this.userId,
        movieId: movie.id
      }).subscribe(() => this.alertify.error(movie.title + ' has been removed from your list!'));
    }
  }
}
