import { Injectable } from '@angular/core';
import { BackService } from './back.service';
import { Observable } from 'rxjs';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private back: BackService, private modal: ModalService) {}

  get_orders_by_customer(id: number): Observable<any> {
    return this.back.get('orders/' + id);
  }

  get_orders_by_seller(id: number): Observable<any> {
    return this.back.get(`orders/seller/${id}`);
  }

  get_order(id: string, user_id: number): Observable<any> {
    return this.back.get(`order/${id}/user/${user_id}`);
  }

  get_order_by_id_seller(id: string, user_id: number): Observable<any> {
    return this.back.get(`order/seller/${id}/user/${user_id}`);
  }

  create_order(order: any, user_id: number): void {
    this.modal.confirm(
      'create order',
      'are you sure you want to create this order?',
      () => this.create_order_confirm(order, user_id).subscribe()
    );
  }

  create_order_confirm(order: any, user_id: number): Observable<any> {
    const formData = new FormData();
    formData.append('products', JSON.stringify(order));
    formData.append('userId', user_id.toString());
    return this.back.post_data('order', formData);
  }
}
