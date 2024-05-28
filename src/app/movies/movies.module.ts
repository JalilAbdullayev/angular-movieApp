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
import {MoviesRoutingModule} from './movies-routing.module';
import {CategoryModule} from "../category/category.module";


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
    FormsModule,
    MoviesRoutingModule,
    CategoryModule
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
