import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent extends CarouselComponent {}
