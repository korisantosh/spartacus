import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { CustomOutletsComponent } from './custom-outlets/custom-outlets.component';
import {
  IconModule,
  OutletPosition,
  OutletRefModule,
  ProductListModule,
  provideOutlet,
} from '@spartacus/storefront';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { HeaderComponent } from 'src/app/spartacus/storefrontlib/cms-components/custom-navigation/header/header.component';

@NgModule({
  declarations: [
    CustomOutletsComponent,
    CustomBannerComponent,
    CustomCarouselComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    OutletRefModule,
    ProductListModule,
  ],
  providers: [
    provideOutlet({
      id: 'Section3',
      position: OutletPosition.AFTER,
      component: CustomOutletsComponent,
    }),
  ],
  exports: [
    CustomBannerComponent,
    CustomOutletsComponent,
    CustomCarouselComponent,
    HeaderComponent
  ],
})
export class CmsComponentsModule {}
