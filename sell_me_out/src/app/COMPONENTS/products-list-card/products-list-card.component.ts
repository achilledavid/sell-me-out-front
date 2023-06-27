import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { product_mini } from 'src/app/CLASSES/product_mini';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'div[products-list-card]',
  templateUrl: './products-list-card.component.html',
  styleUrls: ['./products-list-card.component.scss'],
})
export class ProductsListCardComponent {
  items: product_mini[] = [];
  items_subscription: Subscription;

  constructor(private cart: CartService) {
    this.check_saved_cart();

    this.items_subscription = cart
      .get_items()
      .subscribe((value: product_mini[]) => {
        this.items = value;
      });
  }

  check_saved_cart(): void {
    const saved_cart = localStorage.getItem('cart');
    if (saved_cart) this.items = JSON.parse(saved_cart);
  }
}
