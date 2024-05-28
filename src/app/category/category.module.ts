import {NgModule} from '@angular/core';
import {CategoryComponent} from "./category.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../auth/auth.guard";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCreateComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path: 'categories/create',
      component: CategoryCreateComponent,
      canActivate: [AuthGuard]
    }]),
    SharedModule
  ],
  exports: [
    CategoryComponent ,
    CategoryCreateComponent
  ]
})
export class CategoryModule {
}
