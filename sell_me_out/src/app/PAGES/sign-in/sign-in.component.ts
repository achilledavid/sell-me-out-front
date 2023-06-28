import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/SERVICES/token.service';
import { ConnectionService } from 'src/app/SERVICES/connection.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  wrong_informations: boolean = false;
  password_visibility: string = 'password';

  constructor(
    private token: TokenService,
    private router: Router,
    private connection: ConnectionService
  ) {
    if (this.token.isLoggedIn()) this.router.navigate(['/products']);
  }

  reset_erros() {
    this.wrong_informations = false;
  }

  connect(form: NgForm) {
    this.reset_erros();
    let data = new FormData();
    data.append('mail', form.value.mail);
    data.append('password', form.value.password);

    this.connection.login(data).subscribe(
      (res: any) => {
        this.token.setToken(JSON.stringify(res));
        this.router.navigate(['/products']);
      },
      (err: any) => {
        console.log('Erreur lors de la connexion :', err);
        this.wrong_informations = true;
      }
    );
  }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  toggle_password_visibility() {
    this.password_visibility =
      this.password_visibility == 'password' ? 'text' : 'password';
  }
}
