import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-child',
  templateUrl: './server-child.component.html',
  styleUrls: ['./server-child.component.css'],
})
export class ServerChildComponent implements OnInit {
  serverName = '';
  serverClass = '';
  serverTime = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.serverName = this.route.snapshot.params['name'];
    this.route.params.subscribe((newParams) => {
      this.serverName = newParams['name'];
    });

    //
    this.serverClass = this.route.snapshot.params['class'];
    this.route.params.subscribe((newParams) => {
      this.serverClass = newParams['class'];
    });

    //
    this.serverTime = this.route.snapshot.params['time'];
    this.route.params.subscribe((newParams) => {
      this.serverTime = newParams['time'];
    });
  }
}
