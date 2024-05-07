import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyxi7XtO9S8KZPhQTA1amhCt5UCJDxZd8';

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
