import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {AuthResponse} from "../models/authResponse";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode: boolean = true;
  loading: boolean = false;

  constructor(private authService: AuthService) {
  }

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.loading = true;

    const email = form.value.email;
    const password = form.value.password;

    let authResponse: Observable<AuthResponse>;

    if (this.isLoginMode) {
      authResponse = this.authService.logIn(email, password);
    } else {
      authResponse = this.authService.signUp(email, password);
    }

    authResponse.subscribe(response => {
        console.log(response);
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      });

    form.reset();
  }
}
