import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'cart',
        loadChildren: () => import('../../pages/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'cart-listing',
        loadChildren: () => import('../../pages/cart-listing/cart-listing.module').then( m => m.CartListingPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../pages/login/login.module').then( m => m.LoginPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
