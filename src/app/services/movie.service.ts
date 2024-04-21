import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Movie} from "../models/movie";

@Injectable()
export class MovieService {
  url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {
  }

  getMovies(categoryId: number): Observable<Movie[]> {
    let newUrl = this.url;
    if (categoryId) {
      newUrl += '?categoryId=' + categoryId;
    }
    return this.http.get<Movie[]>(newUrl);
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/' + movieId);
  }

  createMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Movie>(this.url, movie, httpOptions)
  }
}
