import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  number_of_items: number = 0;
  number_of_items_subject: Subject<number> = new Subject<number>();

  constructor() {}

  get_number_of_items(): Observable<number> {
    return this.number_of_items_subject.asObservable();
  }

  add_to_cart(): void {
    this.number_of_items++;
    this.number_of_items_subject.next(this.number_of_items);
  }
}
