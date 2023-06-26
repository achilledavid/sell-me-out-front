import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private token: TokenService, private router: Router) {}

  disconnect() {
    this.token.deleteToken();
    this.router.navigate(['/sign-in']);
  }
}
