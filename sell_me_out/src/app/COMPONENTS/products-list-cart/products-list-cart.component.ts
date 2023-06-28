import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { product } from 'src/app/CLASSES/product';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'div[products-list-card]',
  templateUrl: './products-list-cart.component.html',
  styleUrls: ['./products-list-cart.component.scss'],
})
export class ProductsListCartComponent {
  @Input() enable_add_to_cart: boolean = false;
  items: product[] = [];
  items_subscription: Subscription;

  constructor(private cart: CartService) {
    this.check_saved_cart();

    this.items_subscription = cart.get_items().subscribe((value: product[]) => {
      this.items = value;
    });
  }

  check_saved_cart(): void {
    const saved_cart = localStorage.getItem('cart');
    if (saved_cart) this.items = JSON.parse(saved_cart);
  }
}
