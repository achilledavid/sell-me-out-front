import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  wrong_informations: boolean = false;
  password_visibility: string = 'password';

  constructor(private token: TokenService, private router: Router) {
    if (this.token.isLoggedIn()) this.router.navigate(['/home']);
  }

  connect(form: NgForm) {
    this.token.setToken('token');
    this.router.navigate(['/home']);
  }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  toggle_password_visibility() {
    this.password_visibility =
      this.password_visibility == 'password' ? 'text' : 'password';
  }
}
