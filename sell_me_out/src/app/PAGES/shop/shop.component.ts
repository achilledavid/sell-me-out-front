import { Component } from '@angular/core';
import { product_mini } from 'src/app/CLASSES/product_mini';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  on_product: boolean = true;
  products: product_mini[] = [
    {
      id: 1,
      name: 'New Balance 9060',
      price: 150,
      image: '/assets/img/shoe-1.png',
    },
    {
      id: 2,
      name: 'New Balance 574',
      price: 110,
      image: '/assets/img/shoe-2.png',
    },
    {
      id: 3,
      name: 'New Balance 530',
      price: 110,
      image: '/assets/img/shoe-3.png',
    },
  ];

  go_to_product(): void {
    this.on_product = true;
  }

  go_to_orders(): void {
    this.on_product = false;
  }
}
