import { Component, Input } from '@angular/core';
import { order } from 'src/app/CLASSES/order';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent {
  @Input() orders: order[] = [];
  constructor() {}
}
