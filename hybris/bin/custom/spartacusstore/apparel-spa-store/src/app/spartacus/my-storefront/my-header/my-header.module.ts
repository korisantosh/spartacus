import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDesktopHeaderModule } from '../my-desktop-header/my-desktop-header.module';
import { MobileHeaderModule } from '../mobile-header/mobile-header.module';
import { MyHeaderComponent } from './my-header.component';



@NgModule({
  declarations: [
    MyHeaderComponent
  ],
  imports: [CommonModule, MyDesktopHeaderModule, MobileHeaderModule],
  exports: [
    MyHeaderComponent
  ]
})
export class MyHeaderModule { }
