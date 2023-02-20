import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurbestsellerComponent } from '../pages/content-page/ourbestseller/ourbestseller.component';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomAddToCartComponent } from './custom-add-to-cart/custom-add-to-cart.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
import { InputCounterComponent } from './input-counter/input-counter.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AddToWishlistComponent } from './add-to-wishlist/add-to-wishlist.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    CustomAddToCartComponent,
    AddedToCartDialogComponent,
    InputCounterComponent,
    CartItemComponent,
    AddToWishlistComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductAddToCartComponent: {
          component: CustomAddToCartComponent
        },
        AddToWishListComponent: {
          component: BlankComponent,
        }
      }
    } as CmsConfig)
  ]
})




export class ComponentsModule { }
