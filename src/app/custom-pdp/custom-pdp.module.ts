import { CmsConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { ConfigModule } from '@spartacus/core';
import { CustomAddToCartComponent } from './custom-add-to-cart/custom-add-to-cart.component';
import { CustomProductTabsComponent } from './custom-product-tabs/custom-product-tabs.component';
import { CustomProductTabsModule } from './custom-product-tabs/custom-product-tabs.module';

@NgModule({
  declarations: [CustomProductIntroComponent, CustomAddToCartComponent],

  imports: [
    CommonModule,
    CustomProductTabsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent,
        },
        CMSTabParagraphContainer: {
          component: CustomProductTabsComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomPdpModule {}
