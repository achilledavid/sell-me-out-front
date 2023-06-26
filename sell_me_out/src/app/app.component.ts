import { Component } from '@angular/core';
import { TokenService } from './SERVICES/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sell_me_out';

  constructor(public token: TokenService) {}

  isLoggedIn(): boolean {
    return this.token.isLoggedIn();
  }
}
