import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MediaModule } from './media/media.module';

const imports = [CommonModule, LayoutModule, MediaModule];

@NgModule({
  declarations: [],
  imports: imports,
  exports: imports,
})
export class ConfigurationModule {}
