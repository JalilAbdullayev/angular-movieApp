import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MoviesHomeComponent} from "./movies-home/movies-home.component";
import {AuthGuard} from "../guards/auth.guard";
import {MoviesComponent} from "./movies.component";
import {MovieCreateComponent} from "./movie-create/movie-create.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesHomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MoviesComponent,
      },
      {
        path: 'category/:id',
        component: MoviesComponent
      },
      {
        path: 'create',
        component: MovieCreateComponent
      },
      {
        path: ':id',
        component: MovieDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
