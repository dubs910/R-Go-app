import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

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
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();
    this.cartItems$.subscribe(cartItems => console.log(cartItems));
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

  // Function to handle the checkout process
  async checkout() {
    // Get the total amount from the cart
    const totalAmount = await this.totalAmount$.toPromise();

    // Call the PHP script to store the order data in the XML file
    this.http
      .post<any>('http://localhost/checkout.php', {
        total_amount: totalAmount,
      })
      .subscribe(
        (response) => {
          if (response.success) {
            // Display a confirmation message to the user
            this.showConfirmationMessage(response.order_id);
            // Reset the cart after successful checkout (you can customize this based on your requirements)
            this.cartService.clearCart();
          } else {
            // Handle the case when the checkout is not successful
            // You can display an error message or take appropriate actions
          }
        },
        (error) => {
          // Handle any errors that occur during the checkout process
          // You can display an error message or take appropriate actions
        }
      );
  }

  // Function to display a confirmation message to the user
  async showConfirmationMessage(orderId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Order Placed',
      message: `Your order (Order ID: ${orderId}) has been placed successfully!`,
      buttons: ['OK'],
    });
    alert.present();
  }
}
