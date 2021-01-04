import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './server.component.html',
  selector: 'app-server',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}


}
