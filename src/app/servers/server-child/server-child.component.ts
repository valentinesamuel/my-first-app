import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IDeactivateGuard } from 'src/app/services/guards/deactivate-guard.service';

@Component({
  selector: 'app-server-child',
  templateUrl: './server-child.component.html',
  styleUrls: ['./server-child.component.css'],
})
export class ServerChildComponent implements OnInit, IDeactivateGuard {
  server: { name: string; class: String; time: String };
  editDetails: { name: string; class: String; time: String };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);

      this.server = {
        name: data['server']['name'],
        class: data['server']['class'],
        time: data['server']['time'],
      };
      this.editDetails = { ...this.server };
    });

    //! I used thi sone below to fetch the data without resolve
    // this.route.params.subscribe((data: Params) => {
    //   this.server = {
    //     name: data['name'],
    //     class: data['class'],
    //     time: data['time'],
    //   };
    //   this.editDetails = { ...this.server };
    // });
  }

  canExit() {
    if (
      this.server.class !== this.editDetails.class ||
      this.server.name !== this.editDetails.name ||
      this.server.time !== this.editDetails.time
    ) {
      if (confirm('If you leave, all unsaved changes will be lost!')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
