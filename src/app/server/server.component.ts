import { Component } from "@angular/core";

@Component({
    templateUrl: './server.component.html',
    selector: 'app-server',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverid: number = 12;
    serverStatus: string = 'online';
    getServerStatus() {
        return this.serverStatus;
    }
    
 

}