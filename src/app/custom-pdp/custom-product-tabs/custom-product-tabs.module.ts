import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletModule, PageComponentModule } from '@spartacus/storefront';
import { CustomProductTabsComponent } from './custom-product-tabs.component';
import { I18nModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomProductTabsComponent],
  imports: [CommonModule, PageComponentModule, OutletModule, I18nModule],
})
export class CustomProductTabsModule {}
