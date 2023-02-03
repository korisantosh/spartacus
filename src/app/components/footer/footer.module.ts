import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightComponent } from './copyright/copyright.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { MediaModule, SupplementHashAnchorsModule } from '@spartacus/storefront';


@NgModule({
  declarations: [
    CopyrightComponent
  ],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CMSParagraphComponent: {
          component: CopyrightComponent
        },
      }
    } as CmsConfig),
  ],
  export: [
    CopyrightComponent
  ]
})
export class FooterModule { }
