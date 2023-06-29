import { Component } from '@angular/core';
import { order } from 'src/app/CLASSES/order';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent {
  orders: order[] = [
    {
      id: 'ACH181202',
      date: new Date(),
      total_price: 100,
      seller_id: 7,
    },
  ];
  constructor() {}
}
