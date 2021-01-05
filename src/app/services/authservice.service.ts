import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    alert('You have been logged in');
  }
  logout() {
    this.isLoggedIn = false;
    alert('You have been logged out');
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
