import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {
  CmsConfig,
  ConfigModule,
  PageMetaModule,
  provideDefaultConfig,
} from '@spartacus/core';


@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [CommonModule, RouterModule, PageMetaModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        BreadcrumbComponent: {
          component: CustomBreadcrumbComponent,
        },
      },
    }),
  ],
  export:[
    BreadcrumbsComponent
  ]
})
export class CustomModule { }
