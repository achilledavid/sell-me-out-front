import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { order } from 'src/app/CLASSES/order';

@Component({
  selector: 'order-mini',
  templateUrl: './order-mini.component.html',
  styleUrls: ['./order-mini.component.scss'],
})
export class OrderMiniComponent {
  @Input() order: order = {} as order;

  constructor(private router: Router) {}

  go_to_order_details() {
    this.router.navigate(['orders/details/' + this.order.id]);
  }
}
