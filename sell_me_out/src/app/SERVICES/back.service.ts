import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackService {
  private url = 'https://sellmeout.alexis-bonal.fr/api/';

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.url + url);
  }

  post(url: string) {
    return this.http.post(this.url + url, {});
  }

  post_data(url: string, data: FormData) {
    return this.http.post(this.url + url, data);
  }
}
