import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from '@spartacus/storefront';
import { CustomBannerModule } from '../custom-banner/custom-banner.module';
import { CustomI18nModule } from '../custom-i18n/custom-i18n.module';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';

@NgModule({
  declarations: [],
  imports: [
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    BaseStorefrontModule,
    CustomBannerModule,
    CustomI18nModule,
  ],
  exports: [BaseStorefrontModule],
})
export class SpartacusModule {}
