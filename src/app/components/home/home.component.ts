import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'Welcome ';

  token: any = {};

  constructor(private auth: AuthService, public router: Router) {
  }

  logout() {
    this.token.userID = localStorage.getItem('userID');
    this.token.token = localStorage.getItem('token');

    this.auth.tokenDelete(this.token).subscribe(
      (res: Response) => {
          if (res.toString() === 'OK') {
            localStorage.setItem('userID', '');
            localStorage.setItem('token', '');
            this.router.navigate(['login']);
          }
      },
      (res: Response) => {
        alert(res);
      }
    );
  }
}
