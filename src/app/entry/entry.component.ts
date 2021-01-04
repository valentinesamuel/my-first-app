import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  name = '';
  class = '';
  time = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  jumpToServerChild() {
    this.router.navigate(['servers', this.name, this.class, this.time]);
  }
}
