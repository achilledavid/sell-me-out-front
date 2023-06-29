import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/CLASSES/product';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ModalService } from 'src/app/SERVICES/modal.service';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.scss'],
})
export class ProductMiniComponent {
  @Input() product: product = {} as product;
  @Input() mine: boolean = false;

  constructor(
    private cart: CartService,
    private router: Router,
    private modal: ModalService,
    private product_service: ProductsService
  ) {}

  add_to_cart(product: product) {
    this.cart.add_to_cart(product);
  }

  go_to_details(id: number) {
    this.router.navigate(['products/details/' + id]);
  }

  ask_publish() {
    if (this.product.active == true) {
      this.modal.delete(
        'remove product',
        'are you sure you want to remove this product ?',
        () => this.publish()
      );
    } else {
      this.modal.confirm(
        'enable product',
        'are you sure you want to enable this product ?',
        () => this.publish()
      );
    }
  }

  publish() {
    this.product_service.togge_visibility(this.product.id).subscribe(() => {
      if (this.product.active == true) this.product.active = false;
      else this.product.active = true;
    });
  }
}
