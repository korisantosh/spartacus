import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  CurrentProductService,
  ProductImagesComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-images',
  templateUrl: './custom-product-images.component.html',
  styleUrls: ['./custom-product-images.component.scss']
})
export class CustomProductImagesComponent  extends ProductImagesComponent {

  expandImage = new BehaviorSubject(false);
  selectedIndex: number | undefined;

  constructor(protected currentProductService: CurrentProductService) {
    super(currentProductService);
  }

  openImage(item: any): void {
    this.mainMediaContainer.next(item);
    this.selectedIndex = this.mainMediaContainer.value?.zoom?.galleryIndex;
  }

  triggerZoom(value: boolean): void {
    this.expandImage.next(value);
  }

}
