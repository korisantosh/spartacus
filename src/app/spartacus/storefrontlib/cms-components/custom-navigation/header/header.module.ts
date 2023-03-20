import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { NavigationModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SiteLogoComponent } from './site-logo/site-logo.component';


@NgModule({
  declarations: [
    HeaderNavigationComponent,
    SiteLogoComponent
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
        }
      },
    } as CmsConfig),
  ],
  exports:[
    HeaderNavigationComponent
  ]
})
export class HeaderModule { }