import { Component, Input } from '@angular/core';
import { product } from 'src/app/CLASSES/product';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ModalService } from 'src/app/SERVICES/modal.service';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  @Input() product: product = {} as product;
  @Input() index: number = 0;

  constructor(private cart: CartService, private modal: ModalService) {}

  ask_confirmation() {
    this.modal.delete(
      'remove from cart',
      'are you sure you want to remove this product from your cart ?',
      () => this.remove_from_cart()
    );
  }

  remove_from_cart() {
    this.cart.remove_from_cart_by_key(this.index);
  }
}
