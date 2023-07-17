import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartListingPageRoutingModule } from './cart-listing-routing.module';

import { CartListingPage } from './cart-listing.page';
import { CartPageModule } from '../cart/cart.module';
import { CartItemsModule } from 'src/app/components/cart-items/cart-items.module';
import { ButtonOrderModule } from 'src/app/components/button-order/button-order.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartListingPageRoutingModule,
    CartPageModule,
    CartItemsModule,
    ButtonOrderModule,
  ],
  declarations: [CartListingPage]
})
export class CartListingPageModule {}
