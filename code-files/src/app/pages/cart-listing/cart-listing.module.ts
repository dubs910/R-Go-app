import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartListingPageRoutingModule } from './cart-listing-routing.module';

import { CartListingPage } from './cart-listing.page';
import { CartPageModule } from '../cart/cart.module';
import { CartItemsModule } from 'src/app/components/cart-items/cart-items.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartListingPageRoutingModule,
    CartPageModule,
    CartItemsModule,
  ],
  declarations: [CartListingPage]
})
export class CartListingPageModule {}
