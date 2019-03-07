import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  clear(): void {
    localStorage.clear();
  }

  login(body) {
    return this.http.post(this.apiUrl + '/user/login', body);
  }

  setToken(token): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null && this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    this.http.get(this.apiUrl + '/me')
      .subscribe((response) => {
        console.log(response);
      });

    return true;
  }
}
