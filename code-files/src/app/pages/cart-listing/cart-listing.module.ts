import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartListingPageRoutingModule } from './cart-listing-routing.module';

import { CartListingPage } from './cart-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartListingPageRoutingModule
  ],
  declarations: [CartListingPage]
})
export class CartListingPageModule {}
