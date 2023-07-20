import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.page.html',
  styleUrls: ['./cart-listing.page.scss'],
})
export class CartListingPage {
  cartItems$!: Observable<CartItem[]>;
  totalAmount$!: Observable<number>;

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private http: HttpClient
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
          handler: () => this.cartService.removeItem(item.id)
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }

  async onOrderClicked() {
    const alert = await this.alertCtrl.create({
      header: 'Order Confirmation',
      message: 'Are you sure you want to place the order?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Order canceled');
          },
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Order confirmed');
            this.placeOrder();
          },
        },
      ],
    });

    await alert.present();
  }

  private placeOrder() {
    // Convert cart items to XML
    const cartItemsXML = this.cartToXml(this.cartItems$);

    // Send cart data to the PHP script
    this.http
      .post('http://localhost/place_order.php', cartItemsXML, {
        headers: { 'Content-Type': 'text/xml' },
        responseType: 'text', // Set the responseType to text
      })
      .subscribe(
        (response) => {
          console.log('Data saved to XML file successfully.', response);
          // Handle success response here
          // For example, show a success message to the user.
        },
        (error) => {
          console.error('Error saving data to XML file.', error);
          // Handle error response here
          // For example, show an error message to the user.
        }
      );
  }

  private cartToXml(cartItems: Observable<CartItem[]>): string {
    // Implement the logic to convert cart items to XML format here
    // For example, you can use a loop to map each cart item to an XML element.
    // Ensure the XML structure matches the format expected by the PHP script.
    // Example:
    let xmlData = '<?xml version="1.0" encoding="UTF-8"?>\n<cart>\n';
    cartItems.subscribe((items) => {
      items.forEach((item) => {
        xmlData += `<item>\n`;
        xmlData += `<id>${item.id}</id>\n`;
        xmlData += `<name>${item.name}</name>\n`;
        xmlData += `<price>${item.price}</price>\n`;
        xmlData += `<quantity>${item.quantity}</quantity>\n`;
        xmlData += '</item>\n';
      });
    });
    xmlData += '</cart>';
    return xmlData;
  }
}