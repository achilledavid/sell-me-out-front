import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/CLASSES/product';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  product_id: number = 0;
  product: product = {} as product;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService,
    private product_service: ProductsService
  ) {
    this.check_for_id();
  }

  check_for_id() {
    const id = this.route.snapshot.paramMap.get('product_id');
    if (id) {
      this.product_id = parseInt(id);
      this.get_product();
    }
  }

  get_product() {
    this.product_service.get_product(this.product_id).subscribe((product) => {
      this.product = {
        id: product.id,
        name: product.nom,
        desc: product.description,
        price: JSON.parse(product.prix),
        image: '/assets/img/' + product.image,
        rate: JSON.parse(product.averageRating),
      };
    });
  }

  add_to_cart() {
    this.cart.add_to_cart(this.product);
  }

  back() {
    window.history.back();
  }
}
