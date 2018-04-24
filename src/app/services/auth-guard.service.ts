import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, public router: Router) {
  }

  isAuthenticated = false;

  isWhile = false;

  token: any = {};

  canActivate(): boolean {
    this.token.userID = localStorage.getItem('userID');
    this.token.token = localStorage.getItem('token');
    // console.log('token alındı');

    this.auth.tokenControl(this.token).subscribe(
      (res: Response) => {
        if (res.toString() === 'OK') {
          // console.log(res);
          this.isWhile = true;
          this.isAuthenticated = true;
          // console.log('true');
          this.router.navigate(['home']);
          return true;
        } else {
          // console.log(res);
          this.isWhile = true;
          this.isAuthenticated = false;
          this.router.navigate(['login']);
          // console.log('false');
          return false;
        }
      },
      (res: Response) => {
        alert(res);
      }
    );

    while (this.isWhile && this.isAuthenticated) {
      return true;
    }

    /*while (this.isWhile) {
      if (this.isAuthenticated) {
        // console.log('true');
        return true;
      } else {
        this.router.navigate(['login']);
        // console.log('false');
        return false;
      }
    }*/
  }
}
