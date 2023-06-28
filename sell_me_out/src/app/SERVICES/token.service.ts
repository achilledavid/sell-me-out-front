import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public token: string = '';
  public endpoint: string = '';

  constructor() {}

  public getToken(): string {
    return localStorage.getItem('authToken') || '';
  }

  public setToken(token: string): void {
    this.token = token;
    if (token === '' || !token) localStorage.removeItem('authToken');
    else localStorage.setItem('authToken', token);
  }

  public deleteToken(): void {
    this.token = '';
    localStorage.removeItem('authToken');
  }

  public decodeToken(): any {
    const token: string = this.getToken();
    if (token === '' || !token) return {};
    else return JSON.parse(atob(token.split('.')[1]));
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  getRole(): string {
    const user = localStorage.getItem('authToken');
    if (user) {
      const decoded = JSON.parse(user);
      return decoded.role;
    }
    return '';
  }

  checkIfSeller(): boolean {
    return this.getRole() === 'seller';
  }
}
