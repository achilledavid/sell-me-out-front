import { Injectable } from '@angular/core';
import { BackService } from './back.service';
import { Observable } from 'rxjs';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private back: BackService, private modal: ModalService) {}

  get_orders_by_customer(): Observable<any> {
    return this.back.get('orders');
  }

  get_orders_by_seller(id: number): Observable<any> {
    return this.back.get(`orders/${id}`);
  }

  get_order(id: string): Observable<any> {
    return this.back.get(`order/${id}`);
  }

  create_order(order: any): void {
    this.modal.confirm(
      'create order',
      'are you sure you want to create this order?',
      () => this.create_order_confirm(order)
    );
  }

  create_order_confirm(order: any): Observable<any> {
    return this.back.post_data('order', order);
  }
}
