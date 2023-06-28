import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/CLASSES/product';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  seller: boolean = this.check_if_seller();
  products: product[] = [];

  constructor(
    private product: ProductsService,
    private router: Router,
    private token: TokenService
  ) {
    this.get_products();
  }

  check_if_seller(): boolean {
    return this.token.checkIfSeller();
  }

  get_products() {
    this.product.get_products().subscribe((products) => {
      products.forEach((product: any) => {
        this.products.push({
          id: product.id,
          name: product.nom,
          price: JSON.parse(product.prix),
          image: '/assets/img/' + product.image,
          rate: 0,
          seller_rate: 0,
          active: product.visibility,
        });
      });
    });
  }

  go_to_new_product() {
    this.router.navigate(['/products/new']);
  }
}
