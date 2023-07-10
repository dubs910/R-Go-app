import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartListingPage } from './cart-listing.page';

const routes: Routes = [
  {
    path: '',
    component: CartListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartListingPageRoutingModule {}
