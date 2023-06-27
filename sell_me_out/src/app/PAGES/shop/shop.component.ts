import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  on_product: boolean = true;

  go_to_product(): void {
    this.on_product = true;
  }

  go_to_orders(): void {
    this.on_product = false;
  }
}
