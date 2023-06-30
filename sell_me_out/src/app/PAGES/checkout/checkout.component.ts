import { order } from 'src/app/CLASSES/order';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/SERVICES/cart.service';
import { OrdersService } from 'src/app/SERVICES/orders.service';
import { product } from 'src/app/CLASSES/product';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  total_price: number = 0;
  total_price_subscription: Subscription;
  saved_cart: any;

  constructor(
    private cart: CartService,
    private orders: OrdersService,
    private token: TokenService
  ) {
    this.check_total_price();

    this.total_price_subscription = cart
      .get_total_price()
      .subscribe((value: number) => {
        this.total_price = value;
      });
  }

  check_total_price(): void {
    this.cart.get_total_price().subscribe((value: number) => {
      this.total_price = value;
    });
  }

  back() {
    window.history.back();
  }

  checkout() {
    const id = this.token.getId();
    const cart = this.cart.get_cart();
    this.saved_cart = cart.map((item) => item.id);
    this.orders.create_order(this.saved_cart, id);
  }

  ngOnDestroy(): void {
    this.total_price_subscription.unsubscribe();
  }
}
