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
<<<<<<< Updated upstream
  email: string = ''; 
  orders: any; 
  xmlData: any;
=======
  email: string = '';
  xmlData: any[] = []; // Initialize xmlData as an empty array
>>>>>>> Stashed changes

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    const user = this.authService.getUserData();
    this.email = user.email;
<<<<<<< Updated upstream
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

=======
    this.fetchXMLData(); 
  }

  fetchXMLData() {
    console.log('Fetching XML data...');
    this.http.get('http://localhost/orders.xml', { responseType: 'text' }).subscribe(
      (response) => {
        console.log('XML data received:', response);
        const parser = new DOMParser();
        const xml = parser.parseFromString(response, 'text/xml');

        // Extract the array of items from the XML data (assuming 'item' is the tag name)
        const itemsArray = Array.from(xml.getElementsByTagName('item'));

        // Convert the XML data to JavaScript objects
        const orders = [];
        for (let orderItem of itemsArray) {
          orders.push({
            name: orderItem.querySelector('name')?.textContent || '',
            quantity: orderItem.querySelector('quantity')?.textContent || '',
          });
        }

        // Store the XML data in the 'xmlData' property
        this.xmlData = orders;
      },
      (error) => {
        console.error('Error fetching XML data.', error);
      }
    );
  }

>>>>>>> Stashed changes
  logout() {
    // Call the logout method in the AuthService
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
