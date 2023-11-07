import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.scss'],
  providers:[MessageService]
})
export class NewpassComponent {
  constructor(private router:Router,
    private redirectMenu : RedirectMenuService,
    private renderer: Renderer2,
    private el: ElementRef
     ) {}

     showAlert() {
      const alertDiv = this.renderer.createElement('div');
      this.renderer.addClass(alertDiv, 'alert');
      this.renderer.addClass(alertDiv, 'alert-success');
      this.renderer.setAttribute(alertDiv, 'role', 'alert');
      alertDiv.innerHTML = `Password Changed Successfully`;
      const alertContainer = this.el.nativeElement.querySelector('#alertContainer');
      if (alertContainer) {
        this.renderer.appendChild(alertContainer, alertDiv);
        setTimeout(() => {
          this.renderer.removeChild(alertContainer, alertDiv);
        }, 500);
      }
    }
    onSubmit(event : Event) {
      event.preventDefault();
        this.showAlert(); 
        setTimeout(() => {
          this.redirect('user/login'); 
        }, 1000);
      } 

     redirect(path : string){
      this.redirectMenu.redirectTo(path);
    }
}
