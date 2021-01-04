import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './server.component.html',
  selector: 'app-server',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  name = '';
  class = '';
  time = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToServers() {
    //some authentication can be done here
    this.router.navigate(['servers', this.name, this.class, this.time]);
    console.log(this.time);
  }
}
