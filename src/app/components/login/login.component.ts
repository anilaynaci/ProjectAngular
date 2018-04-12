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

  constructor(private auth: AuthService, public router: Router) {

  }

  login() {
    this.auth.login(this.user).subscribe(
      (res: Response) => {
        if (res.toString() !== '') {
          localStorage.setItem('getUser', res.toString());
          this.router.navigate(['home']);
        } else {
          alert('Kullanıcı adı veya şifre hatalı.');
        }
      },
      (res: Response) => {
        alert('Daha sonra tekrar deneyiniz.');
      }
    );
  }
}
