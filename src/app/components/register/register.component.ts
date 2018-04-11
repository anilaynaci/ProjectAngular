import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  templateUrl: './register.component.html',
  selector: 'app-register',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent {
  user: any = {};

  constructor(private auth: AuthService) {

  }

  register() {
    this.auth.register(this.user).subscribe(
      (res: Response) => {
        alert(res);
      },
      (res: Response) => {
        alert('Daha sonra tekrar deneyiniz.');
      }
    );
  }
}

