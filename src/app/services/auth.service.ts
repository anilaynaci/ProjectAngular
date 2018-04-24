import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppSettings} from '../api.settings';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  register(user): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'register', user);
  }

  login(user): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'login', user);
  }

  tokenControl(token): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'tokenControl', token);
  }

  tokenDelete(token): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'tokenDelete', token);
  }
}
