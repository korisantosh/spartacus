import { Component, OnInit } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrls: ['./custom-banner.component.scss']
})
export class CustomBannerComponent implements OnInit {

  data$: Observable<CmsBannerComponent | any> = this.getCmsBannerData.data$;

  constructor(public getCmsBannerData: CmsComponentData<CmsBannerComponent>) {
    console.log(this.getCmsBannerData);
  }

  ngOnInit(): void {}

}
