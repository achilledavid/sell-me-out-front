import { order } from 'src/app/CLASSES/order';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/CLASSES/product';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  on_product: boolean = true;
  products: product[] = [];
  orders: order[] = [];

  constructor(private product: ProductsService, private token: TokenService) {
    this.get_products();
  }

  get_products() {
    const id = this.token.getId();
    this.product.get_products_by_seller(id).subscribe((products) => {
      products.forEach((product: any) => {
        this.products.push({
          id: product.id,
          name: product.nom,
          price: JSON.parse(product.prix),
          image: '/assets/img/' + product.image,
          rate: parseInt(product.averageRating),
          seller_rate: 0,
          active: product.visibility,
        });
      });
    });
  }

  go_to_product(): void {
    this.on_product = true;
  }

  go_to_orders(): void {
    this.on_product = false;
  }
}
