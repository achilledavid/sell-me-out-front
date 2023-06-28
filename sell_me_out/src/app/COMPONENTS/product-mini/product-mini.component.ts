import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/CLASSES/product';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ModalService } from 'src/app/SERVICES/modal.service';

@Component({
  selector: 'product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.scss'],
})
export class ProductMiniComponent {
  @Input() product: product = {} as product;
  @Input() mine: boolean = false;
  published: boolean = false;

  constructor(
    private cart: CartService,
    private router: Router,
    private modal: ModalService
  ) {}

  ask_confirmation(product: product) {
    this.modal.confirm(
      'add to cart',
      'are you sure you want to add this product to your cart ?',
      () => this.add_to_cart(product)
    );
  }

  add_to_cart(product: product) {
    this.cart.add_to_cart(product);
  }

  go_to_details(id: number) {
    this.router.navigate(['products/details/' + id]);
  }

  publish() {
    this.published = !this.published;
  }
}
