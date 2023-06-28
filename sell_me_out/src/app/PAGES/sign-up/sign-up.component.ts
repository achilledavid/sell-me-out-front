import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/SERVICES/connection.service';
import { ModalService } from 'src/app/SERVICES/modal.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  wrong_informations: boolean = false;
  password_visibility: string = 'password';

  constructor(
    private connection: ConnectionService,
    private router: Router,
    private modal: ModalService
  ) {}

  back() {
    window.history.back();
  }

  toggle_password_visibility() {
    this.password_visibility =
      this.password_visibility == 'password' ? 'text' : 'password';
  }

  reset_errors() {
    this.wrong_informations = false;
  }

  signup(form: NgForm) {
    this.reset_errors();

    let data = new FormData();
    data.append('mail', form.value.mail);
    data.append('password', form.value.password);
    data.append('username', form.value.username);
    data.append('role', form.value.role);

    this.connection.signup(data).subscribe(
      (res: any) => {
        this.modal.success(
          'signup',
          'your account has been created successfully'
        );
        this.router.navigate(['/sign-in']);
      },
      (err: any) => {
        console.log('Erreur lors de la connexion :', err);
        this.wrong_informations = true;
      }
    );
  }
}
