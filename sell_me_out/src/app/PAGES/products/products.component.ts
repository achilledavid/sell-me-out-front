import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product_mini } from 'src/app/CLASSES/product_mini';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: product_mini[] = [];

  constructor(private product: ProductsService, private router: Router) {
    this.get_products();
  }

  get_products() {
    this.product.get_products().subscribe((products) => {
      products.forEach((product: any) => {
        this.products.push({
          id: product.id,
          name: product.nom,
          price: product.prix,
          image: '/assets/img/' + product.image,
        });
      });
      console.log(this.products);
    });
  }

  go_to_new_product() {
    this.router.navigate(['/products/new']);
  }
}
