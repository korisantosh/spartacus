import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AuthService,
  isNotNullable,
  OrderEntry,
  Product,
  WishListService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-add-to-wishlist',
  templateUrl: './add-to-wishlist.component.html',
  styleUrls: ['./add-to-wishlist.component.scss']
})
export class AddToWishlistComponent implements OnInit {

  /*product$: Observable<Product | any> = this.currentProductService.getProduct().pipe(
    filter(isNotNullable),
    tap((product) => this.setStockInfo(product))
  );*/
  product$: Observable<Product | any> = this.currentProductService.getProduct();

  wishListEntries$: Observable<OrderEntry[] | any> = this.wishListService
    .getWishList()
    .pipe(
      filter((wishlist) => Boolean(wishlist)),
      map((wishList) => wishList.entries)
    );

  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  loading$: Observable<boolean> = this.wishListService.getWishListLoading();

  hasStock = false;

  constructor(
    protected wishListService: WishListService,
    protected currentProductService: CurrentProductService,
    protected authService: AuthService
  ) {}

  add(product: Product | any): void {
    this.wishListService.addEntry(product.code);
  }

  remove(entry: OrderEntry | any): void {
    this.wishListService.removeEntry(entry);
  }

  getProductInWishList(product: Product | any, entries: OrderEntry[] | any): OrderEntry {
    //const item = entries.find(product.code);
    const item = entries.find((entry: any) => entry.product.code === product.code);
    return item;
  }

  protected setStockInfo(product: Product | any): void {
    this.hasStock = Boolean(
      //product.stock && product.stock.stockLevelStatus !== 'outOfStock'
      product.stock.stockLevelStatus !== 'outOfStock'
    );
  }

  ngOnInit(): void {
  }

}
