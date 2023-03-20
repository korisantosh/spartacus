import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, PageMetaModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterNavigationComponent,
    FooterCopyrightComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageMetaModule,
    MediaModule,
    GenericLinkModule,
    // NavigationModule,
    HeaderModule,
    ConfigModule.withConfig({
      cmsComponents: {
        BreadcrumbComponent: {
          component: BreadcrumbsComponent,
        },
        CMSParagraphComponent: {
          component: FooterCopyrightComponent,
        },
        // FooterNavigationComponent: {
        //   component: FooterNavigationComponent,
        // }
      },
    } as CmsConfig),
  ],
  exports: [BreadcrumbsComponent, FooterCopyrightComponent, FooterNavigationComponent],
})
export class CustomNavigationModule { }
