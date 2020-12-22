import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './server.component.html',
  selector: 'app-server',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  // serverid: number = 12;
  // serverStatus = 'offline';
  // getServerStatus() {
  //   return this.serverStatus;
  // }

  // getColor() {
  //   return this.serverStatus === 'Online' ? 'green' : 'red';
  // }
  constructor(private router: Router, private route: ActivatedRoute) {}
  // constructor() {
  //   this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  // }
  goToServers() {
    //some authentication can be done here
    this.router.navigate(['unit'], { relativeTo: this.route });
  }
}
