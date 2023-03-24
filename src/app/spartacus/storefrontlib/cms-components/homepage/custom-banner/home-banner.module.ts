import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { HomeBannerComponent } from './home-banner.component';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';



@NgModule({
  imports: [CommonModule, RouterModule, GenericLinkModule, MediaModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: HomeBannerComponent,
        },
        BannerComponent: {
          component: HomeBannerComponent,
        },
        SimpleBannerComponent: {
          component: HomeBannerComponent,
        },
      },
    }),
  ],
  declarations: [HomeBannerComponent],
  exports: [HomeBannerComponent]
})
export class HomeBannerModule { }
