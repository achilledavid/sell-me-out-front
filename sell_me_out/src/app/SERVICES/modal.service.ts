import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  success(title: string, text: string) {
    swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'continue',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button button--main',
      },
    });
  }

  error(title: string, text: string) {
    swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'retry',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button button--red',
      },
    });
  }

  confirm(title: string, text: string, callback: any) {
    swal
      .fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'yes',
        cancelButtonText: 'cancel',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'button button--main',
          cancelButton: 'button',
        },
      })
      .then((result) => {
        if (result.isConfirmed) callback();
      });
  }

  delete(title: string, text: string, callback: any) {
    swal
      .fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'remove',
        cancelButtonText: 'cancel',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'button button--red',
          cancelButton: 'button',
        },
      })
      .then((result) => {
        if (result.isConfirmed) callback();
      });
  }
}
