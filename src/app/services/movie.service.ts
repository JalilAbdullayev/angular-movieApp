import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
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
    return this.http.get<Movie[]>(newUrl)
      .pipe(tap(data => console.table(data)),
        catchError(this.handleError));
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/' + movieId)
      .pipe(tap(data => console.table(data)),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      switch (error.status) {
        case 404:
          console.error('Not found');
          break;
        case 403:
          console.error('Access denied');
          break;
        case 500:
          console.error('Internal server error');
          break;
        default:
          console.error('Unknown error');
      }
    }
    return throwError('Something went wrong!');
  }
}
