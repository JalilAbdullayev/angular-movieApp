import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Category} from "../models/category";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable()
export class CategoryService {
  url = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url).pipe(catchError(this.handleError));
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
