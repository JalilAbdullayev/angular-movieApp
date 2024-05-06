import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {CategoryComponent} from './category/category.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import {FooterComponent} from './footer/footer.component';
import {SummaryPipe} from './pipes/summary.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieFilterPipe} from './pipes/movie-filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
    MovieCreateComponent,
    CategoryCreateComponent,
    AuthComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
