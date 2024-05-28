import {Component, OnInit} from '@angular/core';
import {Movie} from "../movie";
import {MovieService} from "../movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  loading: boolean = false;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      this.movieService.getMovieById(params['id']).subscribe(data => {
        this.movie = data;
        this.loading = false;
      })
    })
  }
}
