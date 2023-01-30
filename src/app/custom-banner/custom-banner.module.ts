import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner.component';
import { ConfigModule, CmsConfig, I18nModule } from '@spartacus/core';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    CustomBannerComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    GenericLinkModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        }
      }
    } as CmsConfig),
  ],
})
export class CustomBannerModule { }
