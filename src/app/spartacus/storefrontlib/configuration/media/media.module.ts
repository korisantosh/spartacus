import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { MediaConfig } from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      mediaFormats: {
        mobile: { width: 400 },
        tablet: { width: 770 },
        desktop: { width: 1140 },
        widescreen: { width: 1400 },
        // product media
        cartIcon: { width: 65 },
        thumbnail: { width: 96 },
        product: { width: 284 },
        zoom: { width: 515 },
      },
    } as MediaConfig),
  ],
})
export class MediaModule {}
