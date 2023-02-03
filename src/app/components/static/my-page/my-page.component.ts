import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {

  constructor(private cmsService: CmsService) {}

  ngOnInit(): void {
    this.cmsService.getCurrentPage().subscribe((res) => {
      console.log(res);
    });
  }

}
