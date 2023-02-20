import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticModule } from './static/static.module';
import { CustomPdpModule } from './custom-pdp/custom-pdp.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StaticModule,
    CustomPdpModule
  ]
})
export class CmsPagesModule { }
