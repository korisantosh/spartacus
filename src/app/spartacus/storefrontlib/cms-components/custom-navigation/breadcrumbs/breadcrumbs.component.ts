import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent extends BreadcrumbComponent {}

