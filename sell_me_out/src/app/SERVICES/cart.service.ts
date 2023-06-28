import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { product } from '../CLASSES/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: product[] = [];
  item_subject: Subject<product[]> = new Subject<product[]>();
  number_of_items: number = this.items.length;
  number_of_items_subject: Subject<number> = new Subject<number>();
  cart_visibility: boolean = false;
  cart_visibility_subject: Subject<boolean> = new Subject<boolean>();
  total_price: number = 0;
  total_price_subject: Subject<number> = new Subject<number>();

  constructor() {
    this.check_for_cart();
  }

  check_for_cart(): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.items = JSON.parse(cart);
      this.item_subject.next(this.items);
      this.update_total_price();
      this.number_of_items = this.items.length;
      this.number_of_items_subject.next(this.number_of_items);
    }
  }

  get_number_of_items(): Observable<number> {
    return this.number_of_items_subject.asObservable();
  }

  add_to_cart(product: product): void {
    this.items.push(product);
    this.item_subject.next(this.items);
    this.update_total_price();
    this.number_of_items = this.items.length;
    this.number_of_items_subject.next(this.number_of_items);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  remove_from_cart_by_key(key: number): void {
    this.items.splice(key, 1);
    this.item_subject.next(this.items);
    this.update_total_price();
    this.number_of_items = this.items.length;
    this.number_of_items_subject.next(this.number_of_items);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  get_items(): Observable<product[]> {
    return this.item_subject.asObservable();
  }

  get_cart_visibility(): Observable<boolean> {
    return this.cart_visibility_subject.asObservable();
  }

  get_total_price(): Observable<number> {
    this.update_total_price();
    return this.total_price_subject.asObservable();
  }

  update_total_price(): void {
    let total_price: number = 0;
    for (let item of this.items) {
      total_price += item.price;
    }
    this.total_price = total_price;
    this.total_price_subject.next(this.total_price);
  }

  toggle_cart(): void {
    this.cart_visibility = !this.cart_visibility;
    this.cart_visibility_subject.next(this.cart_visibility);
  }

  hide_cart(): void {
    this.cart_visibility = false;
    this.cart_visibility_subject.next(this.cart_visibility);
  }

  delete_cart(): void {
    this.items = [];
    this.item_subject.next(this.items);
    this.update_total_price();
    this.number_of_items = this.items.length;
    this.number_of_items_subject.next(this.number_of_items);
    localStorage.removeItem('cart');
  }
}
