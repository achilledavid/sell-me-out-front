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

  constructor(private cart: CartService) {}

  remove_from_cart() {
    this.cart.remove_from_cart_by_key(this.index);
  }
}
