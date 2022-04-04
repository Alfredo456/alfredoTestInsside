import { Injectable, OnInit } from '@angular/core';
import swal from 'sweetalert2';

declare const $: any;

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  showNotification(type: any, message: any) {
    swal.fire({
      position: 'top-end',
      title: message,
      showConfirmButton: false,
      timer: 3000,
      keydownListenerCapture: true,
      stopKeydownPropagation: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      backdrop: false,
      padding: '0',
      color: type === 'danger' ? '#842029' : '',
      background: type === 'danger' ? '#f8d7da' : '',
      returnFocus: false,
    });
  }
}
