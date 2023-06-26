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
    this.subscription = cart
      .get_number_of_items()
      .subscribe((value: number) => {
        this.number_of_items = value;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
