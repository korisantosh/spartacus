import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageComponent } from './my-page/my-page.component';



@NgModule({
  declarations: [
    MyPageComponent
  ],
  imports: [
    CommonModule
  ],
  export:[
    MyPageComponent
  ]
})
export class StaticModule { }
