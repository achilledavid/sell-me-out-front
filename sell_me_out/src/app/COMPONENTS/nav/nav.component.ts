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
    },
    {
      name: 'products',
      route: '/products',
    },
    {
      name: 'orders',
      route: '/orders',
    },
  ];
}
