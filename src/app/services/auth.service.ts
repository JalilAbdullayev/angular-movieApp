import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../models/authResponse";
import {BehaviorSubject, tap} from "rxjs";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  api_key = 'AIzaSyDyxi7XtO9S8KZPhQTA1amhCt5UCJDxZd8';
  user = new BehaviorSubject<User>(null);

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(response => {
      const expirationDate = new Date(new Date().getTime() + (+response.expiresIn) * 1000);
      const user = new User(
        response.email,
        response.localId,
        response.idToken,
        expirationDate
      )
      this.user.next(user);
    }));
  }

  logIn(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(response => {
      const expirationDate = new Date(new Date().getTime() + (+response.expiresIn) * 1000);
      const user = new User(
        response.email,
        response.localId,
        response.idToken,
        expirationDate
      )
      this.user.next(user);
    }));
  }

  logOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }
}
