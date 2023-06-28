import { Component } from '@angular/core';
import { nav_items } from 'src/app/CLASSES/nav_items';
import { ConnectionService } from 'src/app/SERVICES/connection.service';
import { TokenService } from 'src/app/SERVICES/token.service';
@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  seller: boolean = this.check_if_seller();
  protected items: nav_items[] = [
    {
      name: 'products',
      route: '/products',
    },
    {
      name: 'my orders',
      route: '/orders',
    },
  ];

  constructor(
    private token: TokenService,
    private connection: ConnectionService
  ) {}

  check_if_seller(): boolean {
    return this.token.checkIfSeller();
  }

  logout(): void {
    this.connection.ask_logout();
  }
}
