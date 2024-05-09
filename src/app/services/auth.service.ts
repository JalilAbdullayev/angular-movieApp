import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthResponse} from "../models/authResponse";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  api_key = 'AIzaSyDyxi7XtO9S8KZPhQTA1amhCt5UCJDxZd8';

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError));
  }

  logIn(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError));
  }

  private handleError(response: HttpErrorResponse) {
    let message = 'Something went wrong';
    if (!navigator.onLine) {
      message = 'No internet connection';
      return throwError(message);
    }
    if (response.error.error) {
      switch (response.error.error.message) {
        case 'EMAIL_EXISTS':
          message = 'Email already exists';
          break;
        case 'EMAIL_NOT_FOUND':
          message = 'Email not found';
          break;
        case 'INVALID_PASSWORD':
          message = 'Invalid password';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          message = 'E-mail or password is incorrect';
          break;
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            message = 'Too many attempts, please try again later';
            break;
      }
    }
    return throwError(message);
  }
}
