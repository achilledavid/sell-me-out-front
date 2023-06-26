import { Component } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private cart: CartService) {}

  add_to_cart(): void {
    this.cart.add_to_cart();
  }
}
