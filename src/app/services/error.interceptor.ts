import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((response: HttpErrorResponse) => {
        let message = 'Something went wrong';
        if (!navigator.onLine) {
          message = 'No internet connection';
          return throwError(message);
        }
        if (response.error.error) {
          if (response.status === 401) {
            message = 'Unauthorized';
            console.log(message);
            return throwError(message);
          }
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
      })
    );
  }
}
