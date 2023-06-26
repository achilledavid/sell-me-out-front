import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  wrong_informations: boolean = false;
  password_visibility: string = 'password';

  back() {
    window.history.back();
  }

  toggle_password_visibility() {
    this.password_visibility =
      this.password_visibility == 'password' ? 'text' : 'password';
  }
}
