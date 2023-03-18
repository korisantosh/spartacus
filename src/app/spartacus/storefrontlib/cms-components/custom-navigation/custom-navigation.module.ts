import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, PageMetaModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterNavigationComponent,
    FooterCopyrightComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageMetaModule,
    MediaModule,
    GenericLinkModule,
    // NavigationModule,
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
        NavigationComponent: {
          component: HeaderComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [BreadcrumbsComponent, FooterCopyrightComponent, FooterNavigationComponent, HeaderComponent],
})
export class CustomNavigationModule { }
