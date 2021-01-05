import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  name = '';
  class = '';
  time = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  logIn() {
    this.authService.login();
  }
  logOut() {
    this.authService.logout();
  }

  jumpToServerChild() {
    this.router.navigate(['servers', this.name, this.class, this.time]);
  }
}
