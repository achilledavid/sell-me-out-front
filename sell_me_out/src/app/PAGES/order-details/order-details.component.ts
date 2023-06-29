import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { order } from 'src/app/CLASSES/order';
import { OrdersService } from 'src/app/SERVICES/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  order: order = {} as order;
  order_id: string = '';

  constructor(
    private orders_service: OrdersService,
    private route: ActivatedRoute
  ) {
    this.check_for_id();
  }

  check_for_id() {
    const id = this.route.snapshot.paramMap.get('order_id');
    if (id) {
      this.order_id = id;
      //   this.get_order();
    }
  }

  get_order() {
    this.orders_service.get_order(this.order_id).subscribe((order) => {
      this.order = order;
    });
  }
}
