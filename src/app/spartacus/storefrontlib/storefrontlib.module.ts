import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsPagesModule } from './cms-pages/cms-pages.module';
import { CmsComponentsModule } from './cms-components/cms-components.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CmsPagesModule,
    CmsComponentsModule,
    ConfigurationModule,
    RoutesModule,
    SharedModule
  ]
})
export class StorefrontlibModule { }
