import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { CustomProductCarouselComponent } from './custom-product-carousel/custom-product-carousel.component';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import {
  GenericLinkModule,
  CarouselModule,
  ImageLoadingStrategy,
  MediaConfig,
  MediaModule,
  provideCmsStructure
} from '@spartacus/storefront';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CustomBannerComponent,
    CustomProductCarouselComponent
  ],
  imports: [
    CommonModule,
    GenericLinkModule,
    MediaModule,
    UrlModule,
    RouterModule,
    CarouselModule,
    SharedModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductCarouselComponent: {
          selector: CustomProductCarouselComponent,
        },
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },
      },
    } as CmsConfig),

    ConfigModule.withConfig({
      imageLoadingStrategy: ImageLoadingStrategy.LAZY,
    } as MediaConfig),
  ],
  exports: [CustomBannerComponent, CustomProductCarouselComponent],
})
export class HomepageModule { }
