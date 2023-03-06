import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ProductImageZoomModule } from '@spartacus/product/image-zoom/components';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { CustomProductImagesComponent } from './custom-product-images/custom-product-images.component';
import { CarouselModule, MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    AppComponent,
    CustomProductImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    ProductImageZoomModule,
    CarouselModule,
    MediaModule,
    UrlModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductImagesComponent: {
          component: CustomProductImagesComponent,
        },
      },
    } as CmsConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
