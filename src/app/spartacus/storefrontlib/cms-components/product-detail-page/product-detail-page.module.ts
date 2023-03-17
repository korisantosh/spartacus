import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { CustomProductIntroductionComponent } from './custom-product-introduction/custom-product-introduction.component';
import { CustomProductImagesComponent } from './custom-product-images/custom-product-images.component';
import {
  CarouselModule,
  MediaModule,
  OutletModule,
  PageComponentModule,
  StarRatingModule,
} from '@spartacus/storefront';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { ProductImageZoomModule } from '@spartacus/product/image-zoom/components';
import { CustomPdpProductTabsComponent } from './custom-pdp-product-tabs/custom-pdp-product-tabs.component';

@NgModule({
  declarations: [
    CustomProductSummaryComponent,
    CustomProductIntroductionComponent,
    CustomProductImagesComponent,
    CustomPdpProductTabsComponent,
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    CarouselModule,
    MediaModule,
    UrlModule,
    ProductImageZoomModule,
    PageComponentModule,
    OutletModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductImagesComponent: {
          component: CustomProductImagesComponent,
        },
        ProductIntroComponent: {
          component: CustomProductIntroductionComponent,
        },
        CMSTabParagraphContainer: {
          component: CustomPdpProductTabsComponent,
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
    CustomProductImagesComponent,
  ],
})
export class ProductDetailPageModule {}
