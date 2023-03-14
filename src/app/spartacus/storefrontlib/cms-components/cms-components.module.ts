import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingPageModule } from './product-listing-page/product-listing-page.module';
import { ProductDetailPageModule } from './product-detail-page/product-detail-page.module';
import { HomepageModule } from './homepage/homepage.module';
import { MyAccountPageModule } from './my-account-page/my-account-page.module';
import { CustomNavigationModule } from './custom-navigation/custom-navigation.module';
import { MyCartPageModule } from './my-cart-page/my-cart-page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyCartPageModule,
    MyAccountPageModule,
    HomepageModule,
    ProductListingPageModule,
    ProductDetailPageModule,
    CustomNavigationModule
  ]
})
export class CmsComponentsModule { }
