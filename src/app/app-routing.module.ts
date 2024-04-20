import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {MovieDetailsComponent} from "./movies/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies/category/:id',
    component: MoviesComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
