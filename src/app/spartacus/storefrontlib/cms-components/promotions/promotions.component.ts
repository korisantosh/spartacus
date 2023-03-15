import { Component, OnInit, Input } from '@angular/core';
import { Promotion } from '@spartacus/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  @Input()
  promotions: Promotion[];

  constructor() { }

  ngOnInit(): void {
  }

}
