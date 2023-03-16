import { Component, OnInit } from '@angular/core';
import {
  CmsComponentData,
  TabParagraphContainerComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-tabs',
  templateUrl: './custom-product-tabs.component.html',
  styleUrls: ['./custom-product-tabs.component.scss'],
})
export class CustomProductTabsComponent extends TabParagraphContainerComponent {
  ngOnInit(): void {}
}
