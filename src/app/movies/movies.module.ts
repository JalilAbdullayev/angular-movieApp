import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from "./movies.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MovieCreateComponent} from "./movie-create/movie-create.component";
import {SummaryPipe} from "./summary.pipe";
import {MovieFilterPipe} from "./movie-filter.pipe";
import {MoviesHomeComponent} from "./movies-home/movies-home.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieCreateComponent,
    SummaryPipe,
    MovieFilterPipe,
    MoviesHomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieCreateComponent,
    SummaryPipe,
    MovieFilterPipe,
    MoviesHomeComponent
  ]
})
export class MoviesModule {
}
