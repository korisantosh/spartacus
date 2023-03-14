import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { CmsComponentsModule } from './cms-components/cms-components.module';
import { InternationalizationModule } from './internationalization/internationalization.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigurationModule,
    CmsComponentsModule,
    InternationalizationModule
  ],
})
export class SharedModule { }
