import { Injectable } from '@angular/core';
import { BackService } from './back.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private back: BackService) {}

  get_products(): Observable<any> {
    return this.back.get('products');
  }

  get_products_by_seller(id: number): Observable<any> {
    return this.back.get(`products/${id}`);
  }

  get_product(id: number): Observable<any> {
    return this.back.get(`product/${id}`);
  }
}
