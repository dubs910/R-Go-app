import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { XmlService } from 'src/app/services/xml.service';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.page.html',
  styleUrls: ['./cart-listing.page.scss'],
})
export class CartListingPage implements OnInit {
  cartItems$!: Observable<CartItem[]>;
  totalAmount$!: Observable<number>;

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private xmlService: XmlService // Inject the XmlService
  ) {}

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();
  }

  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem) {
    if (item.quantity === 1) this.removeFromCart(item);
    else this.cartService.changeQty(-1, item.id);
  }

  async removeFromCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to remove?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.cartService.removeItem(item.id),
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }

  checkoutAndTotal() {
    // Subscribe to cartItems$ to get the cart items
    this.cartItems$.subscribe(
      (cartItems) => {
        // Save the cart items to XML
        this.xmlService.saveToXml(cartItems).subscribe(
          (response) => {
            console.log('Cart items saved successfully:', response);
          },
          (error) => {
            console.error('Error saving cart items:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }
} 
