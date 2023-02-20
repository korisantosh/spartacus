import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';
import { CurrentProductService, OutletPosition } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-outlets',
  templateUrl: './custom-outlets.component.html',
  styleUrls: ['./custom-outlets.component.scss'],
  styles: [
    `
      :host {
        border: 2px dashed #2a04ff;
        padding: 1rem;
        margin: 1rem auto;
      }
    `,
  ],
})
export class CustomOutletsComponent implements OnInit {
  // outletPosition = OutletPosition;

  hotProduct$: Observable<Product | any> = this.productService.get('816780');
  currentProduct$: Observable<Product | any> =
    this.currentProductService.getProduct();

  constructor(
    private currentProductService: CurrentProductService,
    private productService: ProductService
  ) {
    this.currentProductService.getProduct().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
