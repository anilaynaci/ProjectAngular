import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: any = {};

  loginValue: string[];

  constructor(private auth: AuthService, public router: Router) {

  }

  login() {
    this.auth.login(this.user).subscribe(
      (res: Response) => {
        if (res.toString().includes('~')) {
          this.loginValue = res.toString().split('~');
          /*alert('token: ' + this.loginValue[0] + ' userID: ' + this.loginValue[1] );*/
          localStorage.setItem('token', this.loginValue[0]);
          localStorage.setItem('userID', this.loginValue[1]);
          this.router.navigate(['home']);
        } else {
          alert(res);
        }
      },
      (res: Response) => {
        alert(res);
      }
    );
  }
}
