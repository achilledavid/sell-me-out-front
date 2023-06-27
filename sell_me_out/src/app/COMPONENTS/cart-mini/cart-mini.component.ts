import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'cart-mini',
  templateUrl: './cart-mini.component.html',
  styleUrls: ['./cart-mini.component.scss'],
})
export class CartMiniComponent {
  number_of_items: number = 0;
  subscription: Subscription;

  constructor(private cart: CartService) {
    this.check_saved_cart();
    this.subscription = cart
      .get_number_of_items()
      .subscribe((value: number) => {
        this.number_of_items = value;
      });
  }

  check_saved_cart(): void {
    const saved_cart = localStorage.getItem('cart');
    if (saved_cart) this.number_of_items = JSON.parse(saved_cart).length;
  }

  toggle_cart(): void {
    this.cart.toggle_cart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
