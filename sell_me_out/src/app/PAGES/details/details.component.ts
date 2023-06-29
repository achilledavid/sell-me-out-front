import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/CLASSES/product';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { UserService } from 'src/app/SERVICES/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  product_id: number = 0;
  product: product = {} as product;
  loading: boolean = true;
  seller: any = {};
  seller_id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService,
    private product_service: ProductsService,
    private user: UserService
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

  get_seller(id: any) {
    if (id) {
      this.user.get_user_by_id(id).subscribe((seller) => {
        this.seller = {
          id: parseInt(seller.id),
          name: seller.username,
          email: seller.mail,
          role: seller.role,
        };
      });
    }
  }

  get_product() {
    this.product_service.get_product(this.product_id).subscribe((product) => {
      this.product = {
        id: product.id,
        name: product.nom,
        desc: product.description,
        price: parseInt(product.prix),
        image: '/assets/img/' + product.image,
        rate: parseInt(product.averageRating),
        seller_id: parseInt(product.userId),
        seller_rate: parseInt(product.sellerRating),
        active: product.visibility,
      };
      this.loading = false;
      this.get_seller(this.product.seller_id);
    });
  }

  add_to_cart() {
    this.cart.add_to_cart(this.product);
  }

  back() {
    window.history.back();
  }
}
