import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {
  }

  isAuthenticated = false;

  canActivate(): boolean {

    if (localStorage.getItem('getUser') !== '') {
      this.isAuthenticated = true;
    }

    if (this.isAuthenticated === false) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
