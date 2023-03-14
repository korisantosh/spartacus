import { Component, OnInit } from '@angular/core';
import { CmsParagraphComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer-copyright',
  templateUrl: './footer-copyright.component.html',
  styleUrls: ['./footer-copyright.component.scss']
})
export class FooterCopyrightComponent implements OnInit {

   //getParagraphContent$: Observable<CmsParagraphComponent | any> = this.paragraphComponentData.data$;

   htmlContent =
   'Copyright © 2023 SAP SE or an SAP affiliate company. All rights reserved.';

 // constructor( public paragraphComponentData: CmsComponentData<CmsParagraphComponent>) {
 //   paragraphComponentData.data$.subscribe((data:any) => {
 //     console.log(data);
 //   })
 //  }
 constructor() {}

 ngOnInit(): void {}
}
