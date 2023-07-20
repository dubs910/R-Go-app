import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: string = ''; // Declare the 'email' property
  orders: any[] = []; // Declare the 'orders' property

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

  ngOnInit() {
    // Fetch the user data from the AuthService
    const user = this.authService.getUserData();
    this.email = user.email; 
    // Assign the email from the user data
    // Fetch the user's order history and assign it to the 'orders' property
    this.fetchOrders();
  }

  fetchOrders() {
    // Implement the logic to fetch the user's order history from your database or service
    // For now, I'll just use dummy data for demonstration purposes
    this.orders = [
      { orderNumber: '12345', totalAmount: 50.0, orderDate: new Date() },
      { orderNumber: '54321', totalAmount: 30.0, orderDate: new Date() },
      // Add more dummy orders as needed
    ];
  }

  logout() {
    // Call the logout method in the AuthService
    this.authService.logout();
    this.router.navigate(['/login']);
    // Redirect to the login page after logout
    // You can also show a success message here if needed
  }
}
