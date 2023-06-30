import { Injectable } from '@angular/core';
import { BackService } from './back.service';
import { Observable } from 'rxjs';
import { ModalService } from './modal.service';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private back: BackService,
    private modal: ModalService,
    private cart: CartService,
    private router: Router
  ) {}

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
      'send order',
      'are you sure you want to send this order?',
      () => this.create_order_confirm(order, user_id).subscribe()
    );
  }

  create_order_confirm(order: any, user_id: number): Observable<any> {
    this.modal.success('order sent', 'your order has been sent');
    this.clear_cart();
    this.router.navigate(['/orders']);
    const formData = new FormData();
    formData.append('products', JSON.stringify(order));
    formData.append('userId', user_id.toString());
    return this.back.post_data('order', formData);
  }

  clear_cart(): void {
    this.cart.delete_cart();
  }
}
