import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shop-mini',
  templateUrl: './shop-mini.component.html',
  styleUrls: ['./shop-mini.component.scss'],
})
export class ShopMiniComponent {
  constructor(private router: Router) {}
  go_to_shop(): void {
    this.router.navigate(['/shop']);
  }
}
