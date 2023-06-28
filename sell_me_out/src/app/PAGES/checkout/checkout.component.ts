import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  total_price: number = 0;
  total_price_subscription: Subscription;

  constructor(private cart: CartService) {
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

  ask_checkout() {}

  ngOnDestroy(): void {
    this.total_price_subscription.unsubscribe();
  }
}
