import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { NavigationModule, MiniCartModule, SearchBoxComponent } from '@spartacus/storefront';
import { CmsConfig, ConfigModule, TranslatePipe } from '@spartacus/core';
import { SiteLogoComponent } from './site-logo/site-logo.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    HeaderNavigationComponent,
    SiteLogoComponent,
    CartComponent,
    // TranslatePipe
  ],
  imports: [
    CommonModule,
    NavigationModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CategoryNavigationComponent: {
          component: HeaderNavigationComponent,
        },

        SimpleBannerComponent: {
          component: SiteLogoComponent,
        },

        // SearchBoxComponent: {
        //   component: SearchBoxComponent,
        // },

        MiniCartComponent: {
          component: CartComponent
        }
      },
    } as CmsConfig),
  ],
  exports:[
    HeaderNavigationComponent
  ]
})
export class HeaderModule { }