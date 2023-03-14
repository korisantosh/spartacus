import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-custom-product-introduction',
  templateUrl: './custom-product-introduction.component.html',
  styleUrls: ['./custom-product-introduction.component.scss']
})
export class CustomProductIntroductionComponent implements OnInit {
  product$: Observable<Product | any> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) {}


  ngOnInit(): void {
  }

}
