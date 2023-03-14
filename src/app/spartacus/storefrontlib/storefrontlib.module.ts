import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsPagesModule } from './cms-pages/cms-pages.module';
import { CmsComponentsModule } from './cms-components/cms-components.module';
import { RoutesModule } from './routes/routes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CmsPagesModule,
    CmsComponentsModule,
    RoutesModule
  ]
})
export class StorefrontlibModule { }
