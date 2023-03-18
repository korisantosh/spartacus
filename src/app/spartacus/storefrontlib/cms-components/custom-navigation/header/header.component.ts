import { Component, OnInit } from '@angular/core';
import { CmsComponentData, NavigationComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends NavigationComponent {
  // node$: Observable<NavigationUIComponent | any> = this.getNavigationData.data$;

  // constructor(public getNavigationData: CmsComponentData<NavigationUIComponent>) {
  //   //console.log(this.getCmsBannerData);
  // }

}
