import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import {StarRatingModule} from '@spartacus/storefront';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';


@NgModule({
  declarations: [
    CustomProductIntroComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent
        },
        ProductSummaryComponent: {
          component: ''
        }
      }
    } as CmsConfig)
  ]
})
export class CustomPdpModule { }
