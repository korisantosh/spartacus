import { Component, OnInit } from '@angular/core';
import { CmsBannerComponent, Image, ImageGroup } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { BannerComponent } from '@spartacus/storefront/cms-components';
import { Observable } from 'rxjs';

@Component({
  selector: 'cx-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {

  data$: Observable<CmsBannerComponent | any> = this.getCmsBannerData.data$;

  getTarget(data: CmsBannerComponent): string | null {
    return data.external === 'true' || data.external === true ? '_blank' : null;
  }

  constructor(public getCmsBannerData: CmsComponentData<CmsBannerComponent>) {
    console.log(this.getCmsBannerData);
  }

  ngOnInit(): void {}

}
