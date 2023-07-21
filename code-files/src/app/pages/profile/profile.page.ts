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
  xmlData: any[] = []; // Initialize xmlData as an empty array

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    const user = this.authService.getUserData();
    this.email = user.email;
    this.fetchXMLData(); // Fetch and display order history data
  }

  fetchXMLData() {
    this.http.get('http://localhost/orders.xml', { responseType: 'text' }).subscribe(
      (response) => {
        // Parse the XML data
        const parser = new DOMParser();
        const xml = parser.parseFromString(response, 'text/xml');

        // Extract the array of items from the XML data (assuming 'items' is the tag name)
        const itemsArray = Array.from(xml.getElementsByTagName('item'));

        // Convert the XML data to JavaScript objects
        const orders = [];
        for (let orderItem of itemsArray) {
          const items = [];
          for (let i = 0; i < orderItem.children.length; i++) {
            // Ensure that orderItem.children[i] is an element node
            if (orderItem.children[i].nodeType === Node.ELEMENT_NODE) {
              items.push({
                name: orderItem.children[i].querySelector('name')?.textContent || '',
                quantity: orderItem.children[i].querySelector('quantity')?.textContent || '',
              });
            }
          }
          orders.push({ items });
        }

        // Store the XML data in the 'xmlData' property
        this.xmlData = orders;

        console.log(this.xmlData);
      },
      (error) => {
        console.error('Error fetching XML data.', error);
      },
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
