import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module

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
    private authService: AuthService,
    private http: HttpClient // Inject the HttpClient module
  ) {}

  ngOnInit() {
    // Fetch the user data from the AuthService
    const user = this.authService.getUserData();
    this.email = user.email;
    // Assign the email from the user data
    // Fetch the user's order history and assign it to the 'orders' property
    this.fetchOrders();
  }

  fetchOrders() {
    // Make an HTTP GET request to the fetch_orders.php script that reads the XML data
    this.http
      .get<any[]>('http://localhost/fetch_orders.php') // Replace with the correct URL to your PHP script
      .subscribe(
        (response) => {
          // Handle the response and assign the orders to the 'orders' property
          this.orders = response;
        },
        (error) => {
          console.error('Error fetching order history.', error);
        }
      );
  }

  logout() {
    // Call the logout method in the AuthService
    this.authService.logout();
    this.router.navigate(['/login']);
    // Redirect to the login page after logout
    // You can also show a success message here if needed
  }
}
