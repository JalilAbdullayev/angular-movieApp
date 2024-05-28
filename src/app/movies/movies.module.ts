import {NgModule} from '@angular/core';
import {MoviesComponent} from "./movies.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MovieCreateComponent} from "./movie-create/movie-create.component";
import {SummaryPipe} from "./summary.pipe";
import {MovieFilterPipe} from "./movie-filter.pipe";
import {MoviesHomeComponent} from "./movies-home/movies-home.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MoviesRoutingModule} from './movies-routing.module';
import {CategoryModule} from "../category/category.module";
import {SharedModule} from "../shared/shared.module";


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
    ReactiveFormsModule,
    MoviesRoutingModule,
    CategoryModule,
    SharedModule
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
