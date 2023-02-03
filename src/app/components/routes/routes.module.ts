import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageComponent } from '../static/my-page/my-page.component';
import { CmsPageGuard } from '@spartacus/storefront';
import { RouterModule, Routes } from '@angular/router';

const STATIC_ROUTES: Routes = [
  {
    path: 'my-page',
    component: MyPageComponent,
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
