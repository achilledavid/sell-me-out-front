import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { nav_items } from 'src/app/CLASSES/nav_items';

@Component({
  selector: 'navigation-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() item: nav_items = {} as nav_items;

  protected opened: boolean = false;

  constructor(private router: Router) {}

  protected onclick(): void {
    if (this.item.children) this.opened = !this.opened;
    else this.goto();
  }

  protected goto(): void {
    if (this.item.route) this.router.navigate([this.item.route]);
  }
}
