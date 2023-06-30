import { Component, Input } from '@angular/core';
import { product } from 'src/app/CLASSES/product';

@Component({
  selector: 'div[products-list-order]',
  templateUrl: './products-list-order.component.html',
  styleUrls: ['./products-list-order.component.scss'],
})
export class ProductsListOrderComponent {
  @Input() products?: product[] = [];
  constructor() {}
}
