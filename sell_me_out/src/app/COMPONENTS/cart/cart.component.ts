import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { product_mini } from 'src/app/CLASSES/product_mini';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart_visibility: boolean = false;
  cart_visibility_subscription: Subscription;
  total_price: number = 0;
  total_price_subscription: Subscription;
  items: product_mini[] = [];
  items_subscription: Subscription;

  constructor(private cart: CartService) {
    this.check_saved_cart();

    this.cart_visibility_subscription = cart
      .get_cart_visibility()
      .subscribe((value: boolean) => {
        this.cart_visibility = value;
      });

    this.total_price_subscription = cart
      .get_total_price()
      .subscribe((value: number) => {
        this.total_price = value;
      });

    this.items_subscription = cart
      .get_items()
      .subscribe((value: product_mini[]) => {
        this.items = value;
      });
  }

  check_saved_cart(): void {
    const saved_cart = localStorage.getItem('cart');
    if (saved_cart) this.items = JSON.parse(saved_cart);
    this.check_total_price();
  }

  check_total_price(): void {
    this.total_price = 0;
    this.items.forEach((item) => {
      this.total_price += item.price;
    });
  }

  toggle_cart(): void {
    this.cart.toggle_cart();
  }

  checkout() {
    console.log('checkout');
  }

  ngOnDestroy() {
    this.cart_visibility_subscription.unsubscribe();
    this.total_price_subscription.unsubscribe();
  }
}
