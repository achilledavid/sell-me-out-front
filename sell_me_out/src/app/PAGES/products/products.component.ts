import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product_mini } from 'src/app/CLASSES/product_mini';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
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

  constructor(private router: Router) {}

  go_to_new_product() {
    this.router.navigate(['/products/new']);
  }
}
