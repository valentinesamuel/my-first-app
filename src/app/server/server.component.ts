import { Component } from '@angular/core';

@Component({
  templateUrl: './server.component.html',
  selector: 'app-server',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverid: number = 12;
  serverStatus = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }
}
