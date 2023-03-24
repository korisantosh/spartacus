import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './custom-banner/home-banner.component';
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
    HomeBannerComponent,
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
        }
        , SimpleResponsiveBannerComponent: {
          component: HomeBannerComponent,
        }
      },
    } as CmsConfig),

    ConfigModule.withConfig({
      imageLoadingStrategy: ImageLoadingStrategy.LAZY,
    } as MediaConfig),
  ],
  exports: [HomeBannerComponent, CustomProductCarouselComponent],
})
export class HomepageModule { }
