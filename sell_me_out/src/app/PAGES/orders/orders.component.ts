import { product } from 'src/app/CLASSES/product';
import { Component } from '@angular/core';
import { order } from 'src/app/CLASSES/order';
import { OrdersService } from 'src/app/SERVICES/orders.service';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders: order[] = [];

  constructor(
    private token: TokenService,
    private order_service: OrdersService
  ) {
    const id = this.token.getId();
    this.get_orders_by_customer(id);
  }

  get_orders_by_customer(id: number): void {
    this.order_service.get_orders_by_customer(id).subscribe((orders) => {
      orders.forEach((order: any) => {
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
      });
    });
  }
}
