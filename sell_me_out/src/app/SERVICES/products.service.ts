import { Injectable } from '@angular/core';
import { BackService } from './back.service';
import { product_mini } from '../CLASSES/product_mini';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private back: BackService) {}

  get_products(): Observable<any> {
    return this.back.get('products');
  }
}
