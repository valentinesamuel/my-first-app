import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Params,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user-service.service';

interface server {
  name: string;
  class: string;
  time: String;
}

@Injectable({ providedIn: 'root' })
export class serverChildResolver implements Resolve<server> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<server> | Promise<server> | server {
    let serverName = route.params['name'];
    let serverClass = route.params['class'];
    let serverTime = route.params['time'];

    let serverDetails = this.userService.getInputUser(
      serverName,
      serverClass,
      serverTime
    );
    return serverDetails;
  }
}

