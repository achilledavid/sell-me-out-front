import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { BackService } from './back.service';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(
    private token: TokenService,
    private router: Router,
    private back: BackService,
    private cart: CartService,
    private modal: ModalService
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

  ask_logout() {
    this.modal.confirm('logout', 'are you sure you want to logout ?', () =>
      this.logout()
    );
  }

  logout() {
    this.token.deleteToken();
    this.cart.delete_cart();
    this.router.navigate(['/sign-in']);
  }
}
