import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {Headers} from '@angular/http';
import {Router} from '@angular/router';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  private authUrl = 'https://138.68.82.110/api-token-auth/';

  constructor(private http: Http, private router: Router) {
  }

  public auth(user) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers}); // Create a request option
    let bodyString = JSON.stringify(user);
    return this.http.post(this.authUrl, bodyString, options);
  }

  public logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public tokenNotExpired() {
    let token = sessionStorage.getItem('token');
    let jwtHelper = new JwtHelper();
    return token != null && !jwtHelper.isTokenExpired(token);
  }
}
