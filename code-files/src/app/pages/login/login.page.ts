import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  login() {
    this.http
      .post<any>('http://localhost/login.php', {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (response) => {
          if (response.success) {
            // Store the user's data in the AuthService after a successful login
            this.authService.login(this.email, response.user_data);
            this.router.navigate(['/tabs']);
          } else {
            this.errorMessage = 'Invalid email or password.';
            this.presentErrorAlert();
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error during login:', error);
          this.errorMessage = 'Incorrect email or password, please try again.';
          this.presentErrorAlert();
        }
      );
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: this.errorMessage,
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  logout() {
    // Implement the logout logic here, e.g., clearing session, redirecting to login page, etc.
    console.log('User logged out');
    
    // Clear the email and password fields after logging out
    this.email = '';
    this.password = '';
  }
}
