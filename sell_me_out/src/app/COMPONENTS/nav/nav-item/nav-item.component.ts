import { Component, Input } from '@angular/core';
import { nav_items } from 'src/app/CLASSES/nav_items';

@Component({
  selector: 'navigation-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() item: nav_items = {} as nav_items;
}
