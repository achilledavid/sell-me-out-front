import { Component, Input } from '@angular/core';
import { product_mini } from 'src/app/CLASSES/product_mini';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  @Input() product: product_mini = {} as product_mini;
  @Input() index: number = 0;

  constructor(private cart: CartService) {}

  remove_from_cart() {
    this.cart.remove_from_cart_by_key(this.index);
  }
}
