import { Component } from '@angular/core';
import { nav_items } from 'src/app/CLASSES/nav_items';
@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  protected items: nav_items[] = [
    {
      name: 'home',
      route: '/home',
      round: false,
      notification: false,
    },
    {
      name: 'products',
      route: '/products',
      round: false,
      notification: false,
    },
    {
      name: 'orders',
      route: '/orders',
      round: false,
      notification: false,
    },
    {
      icon: 'cart-shopping',
      route: '/cart',
      round: true,
      notification: true,
      notification_count: '12',
    },
    {
      icon: 'user',
      route: '/user',
      round: true,
      notification: true,
    },
  ];
}
