import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { NavigationModule } from '@spartacus/storefront';
import { FooterNavComponent } from './footer-nav/footer-nav.component';



@NgModule({
  declarations: [
    FooterNavComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    ConfigModule.withConfig({
      cmsComponents: {
        FooterNavigationComponent: {
          component: FooterNavComponent,
        },
      },
    } as CmsConfig),
  ]
})
export class FooterModule { }
