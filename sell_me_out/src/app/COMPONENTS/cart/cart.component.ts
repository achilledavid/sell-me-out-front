import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cart: CartService, private router: Router) {
    this.check_total_price();

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
    this.router.navigate(['/checkout']);
  }

  ngOnDestroy() {
    this.cart_visibility_subscription.unsubscribe();
    this.total_price_subscription.unsubscribe();
  }
}
