import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'Welcome ';

  getUser: string[];

  constructor(public router: Router) {
    this.getUser = localStorage.getItem('getUser').split('~');
    this.title += this.getUser[1];
  }

  logout() {
    localStorage.removeItem('getUser');
    this.router.navigate(['login']);
  }
}
