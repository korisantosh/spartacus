import { Component, OnInit } from '@angular/core';
import { CmsParagraphComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  //getParagraphContent$: Observable<CmsParagraphComponent | any> = this.paragraphComponentData.data$;

  htmlContent='Copyright © 2023 SAP SE or an SAP affiliate company. All rights reserved.';

  // constructor( public paragraphComponentData: CmsComponentData<CmsParagraphComponent>) {
  //   paragraphComponentData.data$.subscribe((data:any) => {
  //     console.log(data);
  //   })
  //  }
  constructor(){}

  ngOnInit(): void {
  }

}
