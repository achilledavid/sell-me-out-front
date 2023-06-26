import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private token: TokenService, private router: Router) {}

  canActivate(): boolean {
    if (!this.token.isLoggedIn()) this.router.navigate(['/sign-in']);
    return this.token.isLoggedIn();
  }

  logout() {
    this.token.deleteToken();
    this.router.navigate(['/sign-in']);
  }
}
