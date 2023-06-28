import { Component, Input } from '@angular/core';
import { product } from 'src/app/CLASSES/product';
import { product_mini } from 'src/app/CLASSES/product_mini';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: product_mini[] = [];
  @Input() mine: boolean = false;
}
