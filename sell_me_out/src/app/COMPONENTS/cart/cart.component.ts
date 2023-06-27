import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart_visibility: boolean = false;
  subscription: Subscription;

  constructor(private cart: CartService) {
    this.subscription = cart
      .get_cart_visibility()
      .subscribe((value: boolean) => {
        this.cart_visibility = value;
      });
  }

  toggle_cart(): void {
    this.cart.toggle_cart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
