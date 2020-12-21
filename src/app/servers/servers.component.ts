import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'The servers you create will show here';
  serverInputName = '';
  serverCreated = false;
  servers = [];

  constructor(private bankService: BankService) {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverInputName;
  }

  ngOnInit(): void {
    this.bankService.launchingData.subscribe((eve:string) => {
      alert(eve);
    });
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverInputName);
    this.serverCreationStatus =
      this.serverInputName + ' Server ' + ' was created!!';
  }
  onlaunched() {
    this.bankService.onlaunch(this.serverInputName);
  }
}
