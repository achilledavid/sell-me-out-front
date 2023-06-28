import { Component, Input } from '@angular/core';
import { product_mini } from 'src/app/CLASSES/product_mini';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: product_mini[] = [];
  @Input() mine: boolean = false;

  constructor() {}
}
