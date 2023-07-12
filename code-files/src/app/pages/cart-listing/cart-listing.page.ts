import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.page.html',
  styleUrls: ['./cart-listing.page.scss'],
})
export class CartListingPage implements OnInit {
  cartItems$!: Observable<CartItem[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
    this.cartItems$.subscribe(cartItems => console.log(cartItems));
  }

}
