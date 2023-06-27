import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { BackService } from './back.service';
import { CartService } from './cart.service';

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

  login(data: FormData) {
    this.back.post_data('signin', data).subscribe(
      (res: any) => {
        console.log('yes');
        this.token.setToken(JSON.stringify(res));
        this.router.navigate(['/']);
        return true;
      },
      (err: any) => {
        console.log(err);
        return false;
      }
    );
  }

  logout() {
    this.token.deleteToken();
    this.cart.delete_cart();
    this.router.navigate(['/sign-in']);
  }
}
