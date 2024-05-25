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
    });
  }

  logIn(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
