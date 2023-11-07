import { Component,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  constructor() { }

  ngOnInit(): void {
    this.showSuccessAlert();
  }
 
  showSuccessAlert() {
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: 'success-alert-popup'
      },
      html: '<i class="fas fa-thumbs-up"></i> Password Changed Successfully',
      didOpen: () => {
        const popup = Swal.getPopup();
        if (popup) {
          popup.classList.remove('swal2-show');
          popup.classList.add('swal2-show', 'swal2-fade-in');
        }
      }
    });
  }
  

}
