import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, PageMetaModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterCopyrightComponent  ],
  imports: [
    CommonModule,
    RouterModule,
    PageMetaModule,
    MediaModule,
    GenericLinkModule,
    // NavigationModule,
    HeaderModule,
    FooterModule,
    ConfigModule.withConfig({
      cmsComponents: {
        BreadcrumbComponent: {
          component: BreadcrumbsComponent,
        },
        CMSParagraphComponent: {
          component: FooterCopyrightComponent,
        }
      },
    } as CmsConfig),
  ],
  exports: [BreadcrumbsComponent, FooterCopyrightComponent],
})
export class CustomNavigationModule { }
