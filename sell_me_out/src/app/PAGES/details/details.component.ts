import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  product_id: number = 0;
  constructor(private route: ActivatedRoute, private cart: CartService) {
    this.check_for_id();
  }

  check_for_id() {
    const id = this.route.snapshot.paramMap.get('product_id');
    if (id) this.product_id = parseInt(id);
  }

  add_to_cart() {
    this.cart.add_to_cart(this.product_id);
  }

  back() {
    window.history.back();
  }
}
