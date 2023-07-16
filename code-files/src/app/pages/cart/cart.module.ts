import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { FoodCardModule } from 'src/app/components/food-card/food-card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    FoodCardModule,
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
