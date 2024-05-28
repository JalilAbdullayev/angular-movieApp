import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AlertifyService} from "./services/alertify.service";
import {ErrorInterceptor} from "./services/error.interceptor";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {MoviesModule} from "./movies/movies.module";
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MoviesModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    AlertifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
