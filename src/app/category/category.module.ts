import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from "./category.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../guards/auth.guard";


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: 'categories/create',
      component: CategoryCreateComponent,
      canActivate: [AuthGuard]
    }])
  ],
  exports: [
    CategoryComponent ,
    CategoryCreateComponent
  ]
})
export class CategoryModule {
}
