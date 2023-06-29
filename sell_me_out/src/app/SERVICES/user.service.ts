import { Injectable } from '@angular/core';
import { BackService } from './back.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private back: BackService) {}

  get_user_by_id(id: any): Observable<any> {
    return this.back.get(`user/${id}`);
  }
}
