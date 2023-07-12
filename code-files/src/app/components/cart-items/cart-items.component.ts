import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  @Input() item!: Food

  constructor() {
    this.item = {
        id: 1,
        title:'S1',
        title2:'Pinoy Style Spaghetti + Tetra Drink',
        price: 75,
        image: '../../assets/img/Package 1/Snack1.png',
        description: 'Experience the savory delight of Pinoy-style Spaghetti with Tetra Juice Pack. A flavorful fusion that satisfies and tantalizes, this dish is a true Pinoy favorite.',
    };
  }
}
