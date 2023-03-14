import { Component, OnInit } from '@angular/core';
import {
  CmsProductCarouselComponent as model,
  Product,
  ProductScope,
  ProductService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-carousel',
  templateUrl: './custom-product-carousel.component.html',
  styleUrls: ['./custom-product-carousel.component.scss']
})
export class CustomProductCarouselComponent implements OnInit {
  protected readonly PRODUCT_SCOPE = ProductScope.LIST;

  private componentData$: Observable<model | any> =
    this.componentData.data$.pipe(filter(Boolean));

  title$: Observable<string | any> = this.componentData$.pipe(
    map((data) => data.title)
  );

  items$: Observable<Observable<Product>[] | any> = this.componentData$.pipe(
    map((data) => data.productCodes?.trim().split(' ') ?? []),
    map((codes) =>
      codes.map((code: any) =>
        this.productService.get(code, [this.PRODUCT_SCOPE, ProductScope.PRICE])
      )
    )
  );
  constructor(
    protected componentData: CmsComponentData<model>,
    protected productService: ProductService
  ) {
    componentData.data$.subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
