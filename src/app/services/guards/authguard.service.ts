import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authservice.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    let isLoggedIn = this.authService.isAuthenticated();

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate['server'];
      alert('sorry sir, you have to log in');
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.canActivate(route, state);
  }
}
