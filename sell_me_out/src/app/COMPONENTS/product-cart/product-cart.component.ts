import { Component, Input } from '@angular/core';
import { product } from 'src/app/CLASSES/product';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  @Input() product: product = {} as product;
  @Input() index: number = 0;
  @Input() enable_add_to_cart: boolean = false;
  @Input() enable_remove_from_cart: boolean = false;
  @Input() enable_stars: boolean = false;

  constructor(private cart: CartService) {}

  remove_from_cart() {
    this.cart.remove_from_cart_by_key(this.index);
  }

  add_to_cart() {
    this.cart.add_to_cart(this.product);
  }

  change_rate(rate: number) {
    this.product.rate = rate;
  }

  get_product_rate() {
    return this.product.rate;
  }
}
