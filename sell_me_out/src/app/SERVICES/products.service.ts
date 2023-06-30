import { product } from 'src/app/CLASSES/product';
import { Injectable } from '@angular/core';
import { BackService } from './back.service';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private back: BackService,
    private token: TokenService,
    private modal: ModalService
  ) {}

  get_products(): Observable<any> {
    return this.back.get('products');
  }

  get_products_by_seller(id: number): Observable<any> {
    return this.back.get(`products/${id}`);
  }

  get_product(id: number): Observable<any> {
    return this.back.get(`product/${id}`);
  }

  create_product(product: any): Observable<any> {
    const formData = new FormData();
    formData.append('nom', product.name);
    formData.append('description', product.description);
    formData.append('prix', product.price.toString());
    formData.append('visibility', product.active);
    const id = this.token.getId();
    formData.append('userId', id.toString());
    return this.back.post_data('product', formData);
  }

  togge_visibility(id: number): Observable<any> {
    return this.back.put_without_data(`product/visibility/${id}`);
  }

  search_by_name(name: string): Observable<any> {
    return this.back.get(`products/search/${name}`);
  }

  search_by_name_with_seller(name: string, id: number): Observable<any> {
    return this.back.get(`products/${id}/search/${name}`);
  }

  change_stars(user_id: string, product_id: string, rate: number) {
    const formData = new FormData();
    formData.append('userId', user_id.toString());
    return this.back.post_data(`product/${product_id}/stars/${rate}`, formData);
  }
}
