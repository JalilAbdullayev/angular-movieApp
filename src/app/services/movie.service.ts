import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Movie} from "../models/movie";

@Injectable()
export class MovieService {
  url_firebase = 'https://angular-movieapp-65330-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  getMovies(categoryId: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url_firebase + 'movies.json').pipe(
      map(response => {
        const movies: Movie[] = [];
        for (const key in response) {
          if (categoryId) {
            if (categoryId === response[key].categoryId) {
              movies.push({...response[key], id: key});
            }
          } else {
            movies.push({...response[key], id: key});
          }
        }
        return movies;
      }),
      catchError(this.handleError)
    );
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(this.url_firebase + 'movies/' + movieId + '.json');
  }

  createMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Movie>(this.url_firebase + 'movies.json', movie, httpOptions)
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
