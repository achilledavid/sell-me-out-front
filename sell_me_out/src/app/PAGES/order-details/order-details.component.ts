import { user } from './../../CLASSES/user';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { order } from 'src/app/CLASSES/order';
import { product } from 'src/app/CLASSES/product';
import { OrdersService } from 'src/app/SERVICES/orders.service';
import { TokenService } from 'src/app/SERVICES/token.service';
import { UserService } from 'src/app/SERVICES/user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  order: order = {} as order;
  order_id: string = '';
  user: any;
  @Input() products: product[] = [];

  constructor(
    private route: ActivatedRoute,
    private token: TokenService,
    private user_service: UserService
  ) {
    this.check_for_id();
  }

  check_for_id() {
    const id = this.route.snapshot.paramMap.get('order_id');
    if (id) {
      this.order_id = id;
    }

    const order = history.state.order;
    if (order && Array.isArray(order.products)) {
      const products: product[] = order.products.map((product: product) => {
        return {
          id: product.id,
          name: product.name,
          desc: product.desc,
          price: product.price,
          image: '/assets/img/' + product.image,
          seller_id: product.seller_id,
          seller_rate: 0,
          rate: product.rate,
          active: product.active,
          quantity: product.quantity,
        };
      });

      this.order = {
        id: order.id,
        user_id: order.user_id,
        total_price: order.total_price,
        date: order.date,
        products: products,
      };
      this.user = this.get_user(order.user_id);
    }
  }

  get_user(id: number) {
    return this.user_service.get_user_by_id(id);
  }
}
