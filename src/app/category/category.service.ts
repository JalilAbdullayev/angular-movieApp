import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Category} from "./category";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable()
export class CategoryService {
  url_firebase = 'https://angular-movieapp-65330-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url_firebase + 'categories.json').pipe(
      map(response => {
        const categories: Category[] = [];
        for (const key in response) {
          categories.push({...response[key], id: key})
        }
        return categories;
      }),
      catchError(this.handleError)
    );
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url_firebase + 'categories.json', category);
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
