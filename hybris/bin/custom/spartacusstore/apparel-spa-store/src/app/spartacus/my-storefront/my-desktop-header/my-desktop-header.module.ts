import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlModule } from '@spartacus/core';
import {
  GenericLinkModule,
  IconModule,
  MiniCartModule,
  PageSlotModule,
  SearchBoxModule,
} from '@spartacus/storefront';


import { MyDesktopHeaderComponent } from './my-desktop-header.component';



@NgModule({
  declarations: [
    MyDesktopHeaderComponent
  ],
  imports: [
    CommonModule,
    GenericLinkModule,
    PageSlotModule,
    SearchBoxModule,
    IconModule,
    MiniCartModule,
    UrlModule,
  ],
  exports: [
    MyDesktopHeaderComponent
  ]
})
export class MyDesktopHeaderModule { }
