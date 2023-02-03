import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';
import { CurrentProductService, OutletPosition } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-outlet',
  templateUrl: './my-outlet.component.html',
  styleUrls: ['./my-outlet.component.scss']
})
export class MyOutletComponent implements OnInit {

  hotProduct$: Observable<Product | any> = this.productService.get('300310300');
  currentProduct$: Observable<Product | any> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService,
    private productService: ProductService) {
    this.currentProductService.getProduct().subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
