import { user } from './../../CLASSES/user';
import { order } from 'src/app/CLASSES/order';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/CLASSES/product';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { TokenService } from 'src/app/SERVICES/token.service';
import { OrdersService } from 'src/app/SERVICES/orders.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  on_product: boolean = true;
  products: product[] = [];
  orders: order[] = [];
  seller: boolean = this.check_if_seller();

  constructor(
    private product: ProductsService,
    private token: TokenService,
    private router: Router,
    private orders_service: OrdersService
  ) {
    this.get_products();
  }

  check_if_seller(): boolean {
    return this.token.checkIfSeller();
  }

  go_to_new_product(): void {
    this.router.navigateByUrl('/products/new');
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
    this.get_seller_orders();
  }

  get_seller_orders() {
    const id = this.token.getId();
    this.orders_service.get_orders_by_seller(id).subscribe((orders) => {
      orders.forEach((order: any) => {
        if (Array.isArray(order.produits)) {
          const products: product[] = order.produits.map((product: any) => {
            return {
              id: product.id,
              name: product.nom,
              desc: product.description,
              price: parseFloat(product.prix),
              image: product.image,
              seller_id: product.userId,
              seller_rate: 0,
              rate: parseInt(product.note),
              active: product.visibility === '1',
              quantity: parseInt(product.quantity),
            };
          });

          this.orders.push({
            id: order.idCommande,
            user_id: parseInt(order.idUtilisateur),
            total_price: order.prixTotalCommande,
            date: order.dateCommande,
            products: products,
          });
        }
      });
    });
  }
}
