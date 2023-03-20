import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { NavigationModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';


@NgModule({
  declarations: [
    HeaderNavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CategoryNavigationComponent: {
          component: HeaderNavigationComponent,
        },
      },
    } as CmsConfig),
  ],
  exports:[
    HeaderNavigationComponent
  ]
})
export class HeaderModule { }