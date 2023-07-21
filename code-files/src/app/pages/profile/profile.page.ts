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

  logout() {
    // Call the logout method in the AuthService
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
