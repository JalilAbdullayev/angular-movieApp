import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {CategoryComponent} from './category/category.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {AuthComponent} from './auth/auth.component';
import {AlertifyService} from "./services/alertify.service";
import {ErrorInterceptor} from "./services/error.interceptor";
import {AuthInterceptor} from "./services/auth.interceptor";
import {AlertComponent} from './shared/alert/alert.component';
import {LoadingComponent} from './shared/loading/loading.component';
import {MoviesModule} from "./movies/movies.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    FooterComponent,
    CategoryCreateComponent,
    AuthComponent,
    AlertComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MoviesModule
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
