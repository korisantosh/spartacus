import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [TestPageComponent],
  imports: [CommonModule],
  exports: [TestPageComponent],
})
export class StaticModule {}
