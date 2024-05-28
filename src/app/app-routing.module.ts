import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {MovieDetailsComponent} from "./movies/movie-details/movie-details.component";
import {MovieCreateComponent} from "./movies/movie-create/movie-create.component";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies/category/:id',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/create',
    component: MovieCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    canActivate: [AuthGuard]
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
