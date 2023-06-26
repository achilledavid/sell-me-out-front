import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private token: TokenService, private router: Router) {
    if (this.token.isLoggedIn()) this.router.navigate(['/home']);
  }

  connect() {
    this.token.setToken('token');
    this.router.navigate(['/home']);
  }
}
