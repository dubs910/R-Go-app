import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  @Input() item!: CartItem;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();
}
