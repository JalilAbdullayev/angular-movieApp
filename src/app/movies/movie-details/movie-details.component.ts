import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMovieById(params['id']).subscribe(data => {
        this.movie = data;
      })
    })
  }
}