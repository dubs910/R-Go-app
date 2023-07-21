import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: string = ''; 
  orders: any; 
  xmlData: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    const user = this.authService.getUserData();
    this.email = user.email;
    this.fetchOrders();
    this.fetchXMLData();
  }

  fetchOrders() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the GET request
    xhr.open('GET', 'http://localhost/fetch_orders.php', true);

    // Set the responseType to 'document' to parse XML data
    xhr.responseType = 'document';

    // Set up the onload callback to handle the response
    xhr.onload = () => {
      if (xhr.status === 200) {
        // The request was successful
        this.orders = xhr.response;
      } else {
        // The request failed
        console.error('Error fetching order history.');
      }
    };

    // Set up the onerror callback to handle errors
    xhr.onerror = () => {
      console.error('Error fetching order history.');
    };

    // Send the GET request
    xhr.send();
  }

  fetchXMLData() {
    this.http.get('http://localhost/fetch_orders.php', { responseType: 'text' })
      .subscribe(
        (response) => {
          // Parse the XML data
          const parser = new DOMParser();
          const xml = parser.parseFromString(response, 'text/xml');

          // Convert the XML data to a JavaScript object (if needed)
          const data = this.xmlToObject(xml);

          // Store the XML data in the 'xmlData' property
          this.xmlData = data;
        },
        (error) => {
          console.error('Error fetching XML data.', error);
        }
      );
  }

  xmlToObject(xml: Document): any {
    return xml;
  }

  logout() {
    // Call the logout method in the AuthService
    this.authService.logout();
    this.router.navigate(['/login']);
    // Redirect to the login page after logout
    // You can also show a success message here if needed
  }
}
