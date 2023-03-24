import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { CustomProductIntroductionComponent } from './custom-product-introduction/custom-product-introduction.component';
import { CustomProductImagesComponent } from './custom-product-images/custom-product-images.component';
import { CarouselModule, MediaModule, StarRatingModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { ProductImageZoomModule } from '@spartacus/product/image-zoom/components';


@NgModule({
  declarations: [
    CustomProductSummaryComponent,
    CustomProductIntroductionComponent,
    CustomProductImagesComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    CarouselModule,
    MediaModule,
    UrlModule,
    ProductImageZoomModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductImagesComponent: {
          component: CustomProductImagesComponent,
        },
        ProductIntroComponent: {
          component: CustomProductIntroductionComponent,
        },
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [
    CustomProductIntroductionComponent,
    CustomProductSummaryComponent,
    CustomProductImagesComponent,
  ],
})
export class ProductDetailPageModule { }
