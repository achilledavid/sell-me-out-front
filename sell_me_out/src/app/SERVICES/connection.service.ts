import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { BackService } from './back.service';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(
    private token: TokenService,
    private router: Router,
    private back: BackService,
    private cart: CartService
  ) {}

  canActivate(): boolean {
    if (!this.token.isLoggedIn()) this.router.navigate(['/sign-in']);
    return this.token.isLoggedIn();
  }

  signin(data: FormData): Observable<any> {
    return this.back.post_data('signin', data);
  }

  signup(data: FormData): Observable<any> {
    return this.back.post_data('signup', data);
  }

  logout() {
    this.token.deleteToken();
    this.cart.delete_cart();
    this.router.navigate(['/sign-in']);
  }
}
