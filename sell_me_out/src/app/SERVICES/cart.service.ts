import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: number[] = [];
  number_of_items: number = this.items.length;
  number_of_items_subject: Subject<number> = new Subject<number>();
  cart_visibility: boolean = false;
  cart_visibility_subject: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  get_number_of_items(): Observable<number> {
    return this.number_of_items_subject.asObservable();
  }

  add_to_cart(id: number): void {
    this.items.push(id);
    this.number_of_items = this.items.length;
    this.number_of_items_subject.next(this.number_of_items);
    console.log(this.items);
  }

  get_cart_visibility(): Observable<boolean> {
    return this.cart_visibility_subject.asObservable();
  }

  toggle_cart(): void {
    this.cart_visibility = !this.cart_visibility;
    this.cart_visibility_subject.next(this.cart_visibility);
  }
}
