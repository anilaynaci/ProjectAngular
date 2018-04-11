import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  register(user): Observable<any> {
    return this.http.post('http://localhost:63415/Service/LoginRegisterService.svc/user/registration', user);
  }

  login(user): Observable<any> {
    return this.http.post('http://localhost:63415/Service/LoginRegisterService.svc/user/login', user);
  }
}
