import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from "./alert/alert.component";
import {LoadingComponent} from "./loading/loading.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AlertComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
