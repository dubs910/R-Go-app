import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private userData: any = {};

  constructor() {}

  login(email: string, data: any) {
    this.isLoggedIn = true;
    this.userData = {
      email: email,
      // Add any other relevant user data fields here
    };
  }

  logout() {
    this.isLoggedIn = false;
    this.userData = {};
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  getUserData(): any {
    return this.userData;
  }
}
