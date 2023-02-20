import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomOutletsComponent } from './custom-outlets/custom-outlets.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import {
  IconModule,
  OutletPosition,
  OutletRefModule,
  ProductListModule,
  provideOutlet,
} from '@spartacus/storefront';


@NgModule({
  declarations: [
    CustomOutletsComponent,
    CustomCarouselComponent
  ],
  imports: [CommonModule, IconModule, OutletRefModule, ProductListModule],
  providers: [
    provideOutlet({
      id: 'Section3',
      position: OutletPosition.AFTER,
      component: CustomOutletsComponent,
    }),
  ],
  exports: [CustomCarouselComponent, CustomOutletsComponent],
})
export class SharedModule { }
