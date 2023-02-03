import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticModule } from './static/static.module';
import { RoutesModule } from './routes/routes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StaticModule,
    RoutesModule
  ]
})
export class ComponentsModule { }
