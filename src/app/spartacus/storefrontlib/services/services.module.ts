import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { MySearchBoxComponentService } from './my-search-box-component.service';
import {
  ConfigModule,
  PRODUCT_NORMALIZER,
  RoutingConfig,
} from '@spartacus/core';
import { ProductPrettyNameNormalizer } from './product-pretty-name-normalizer';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: SearchBoxComponentService,
      useClass: MySearchBoxComponentService,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductPrettyNameNormalizer,
      multi: true,
    },
  ],
})
export class ServicesModule {}
