import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/CLASSES/product';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.scss'],
})
export class ProductMiniComponent {
  @Input() product: product = {} as product;
  @Input() mine: boolean = false;
  published: boolean = false;

  constructor(private cart: CartService, private router: Router) {}

  add_to_cart(product: any) {
    this.cart.add_to_cart(product);
  }

  go_to_details(id: number) {
    this.router.navigate(['products/details/' + id]);
  }

  publish() {
    this.published = !this.published;
  }
}
