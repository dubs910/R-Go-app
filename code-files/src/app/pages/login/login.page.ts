import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    // Make a request to the PHP backend to check user credentials
    this.http
      .post<any>('http://localhost/login.php', {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (response) => {
          console.log('Response:', response); // Log the complete response
          if (response.success) {
            // Redirect to the dashboard or home page upon successful login
            this.router.navigate(['/tabs']);
          } else {
            this.errorMessage = 'Invalid email or password.';
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error during login:', error);
          this.errorMessage = 'An error occurred during login.';
        }
      );
  }
}