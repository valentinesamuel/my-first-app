import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
 serverName = '';
  serverClass = '';
  serverTime = '';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.serverName = this.route.snapshot.params['name'];
    this.serverClass = this.route.snapshot.params['class'];
    this.serverTime = this.route.snapshot.params['time'];

  }
  



}
