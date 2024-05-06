import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {MovieDetailsComponent} from "./movies/movie-details/movie-details.component";
import {MovieCreateComponent} from "./movies/movie-create/movie-create.component";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import {AuthComponent} from "./auth/auth.component";

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
    path: 'movies/create',
    component: MovieCreateComponent
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
