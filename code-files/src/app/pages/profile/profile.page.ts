import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  orders: any[] = []; // You can replace 'any[]' with the actual type of orders, such as 'Order[]'
  
  constructor() { }

  ngOnInit() {
    // Fetch the user's order history and assign it to the 'orders' property
    this.fetchOrders();
  }

  fetchOrders() {
    // Implement the logic to fetch the user's order history from your database or service
    // For now, I'll just use dummy data for demonstration purposes
    this.orders = [
      { orderNumber: '12345', totalAmount: 50.00, orderDate: new Date() },
      { orderNumber: '54321', totalAmount: 30.00, orderDate: new Date() },
      // Add more dummy orders as needed
    ];
  }

  logout() {
    // Implement the logout logic here, e.g., clearing session, redirecting to login page, etc.
    console.log('User logged out');
  }
}
