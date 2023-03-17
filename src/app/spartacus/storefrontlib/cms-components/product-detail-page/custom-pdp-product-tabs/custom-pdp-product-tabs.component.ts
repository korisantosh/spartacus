import { Component, OnInit } from '@angular/core';
import {
  CmsComponentData,
  TabParagraphContainerComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-pdp-product-tabs',
  templateUrl: './custom-pdp-product-tabs.component.html',
  styleUrls: ['./custom-pdp-product-tabs.component.scss'],
})
export class CustomPdpProductTabsComponent extends TabParagraphContainerComponent {
  ngOnInit(): void {}
}
