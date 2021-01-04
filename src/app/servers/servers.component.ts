import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  name = '';
  class = '';
  time = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  toServerDetails() {
    this.router.navigate([this.name, this.class, this.time], {
      relativeTo: this.route,
    });
  }
}
