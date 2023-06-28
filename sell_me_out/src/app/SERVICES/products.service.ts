import { Injectable } from '@angular/core';
import { BackService } from './back.service';
import { product } from '../CLASSES/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private back: BackService) {}

  get_products(): Observable<any> {
    return this.back.get('products');
  }

  get_product(id: number): Observable<any> {
    return this.back.get(`product/${id}`);
  }
}
