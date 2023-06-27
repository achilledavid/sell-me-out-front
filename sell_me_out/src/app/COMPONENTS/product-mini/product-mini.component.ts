import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { product_mini } from 'src/app/CLASSES/product_mini';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.scss'],
})
export class ProductMiniComponent {
  @Input() product: product_mini = {} as product_mini;

  constructor(private cart: CartService, private router: Router) {}

  add_to_cart(id: number) {
    this.cart.add_to_cart(id);
  }

  go_to_details(id: number) {
    this.router.navigate(['products/details/' + id]);
  }
}
