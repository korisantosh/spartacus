import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsPageGuard } from '@spartacus/storefront';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from '../cms-pages/static/test-page/test-page.component';

const STATIC_ROUTES: Routes = [
  {
    path: 'test-page',
    component: TestPageComponent,
    canActivate: [CmsPageGuard],
    data: {
      pageLabel: 'homepage',
    },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(STATIC_ROUTES)],
})
export class RoutesModule { }
