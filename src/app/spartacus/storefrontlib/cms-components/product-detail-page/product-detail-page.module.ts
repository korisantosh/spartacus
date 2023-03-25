import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { CustomProductIntroductionComponent } from './custom-product-introduction/custom-product-introduction.component';
import { CarouselModule, MediaModule, StarRatingModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { CustomProductImageZoomModule } from './custom-product-image-zoom/custom-product-image-zoom.module';


@NgModule({
  declarations: [
    CustomProductSummaryComponent,
    CustomProductIntroductionComponent,
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    CarouselModule,
    MediaModule,
    UrlModule,
    CustomProductImageZoomModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroductionComponent,
        },
        // ProductSummaryComponent: {
        //   component: CustomProductSummaryComponent,
        // },
      },
    } as CmsConfig),
  ],
  exports: [
    CustomProductIntroductionComponent,
    CustomProductSummaryComponent,
  ],
})
export class ProductDetailPageModule { }
