import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletPosition, OutletRefModule, ProductListModule, provideOutlet } from '@spartacus/storefront';
import { MyOutletComponent } from './my-outlet/my-outlet.component';


@NgModule({
  declarations: [
    MyOutletComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule
  ],
  providers: [
    provideOutlet({
      id: 'Section3',
      position: OutletPosition.AFTER,
      component: MyOutletComponent,
    }),
  ],
  export:[
    MyOutletComponent
  ]
})
export class CustomModule { }
