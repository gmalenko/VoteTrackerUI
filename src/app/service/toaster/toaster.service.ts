import { Injectable } from '@angular/core';
import { ToastrManager} from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrManager) { }

  Success(message: string, title?: string): void {
    this.toastr.successToastr(message, title, {
      newestOnTop: true,
      showCloseButton: true,
    });
  }

  Error(message: string, title?: string): void {
    this.toastr.errorToastr(message, title, {
      newestOnTop: true,
      showCloseButton: true,
    });
  }

  Warning(message: string, title?: string): void {
    this.toastr.warningToastr(message, title, {
      newestOnTop: true,
      showCloseButton: true,
    });
  }

  Info(message: string, title?: string): void {
    this.toastr.infoToastr(message, title, {
      newestOnTop: true,
      showCloseButton: true,
    });
  }

  BottomInfo(message: string, title?: string): void {
    this.toastr.infoToastr(message, title, {
      position: 'bottom-full-width',
      showCloseButton: true,
      dismiss: 'click'
    });
  }
}
