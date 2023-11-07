import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }
  return null;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [MessageService]
})
export class RegistrationComponent {
  email: string = '';
  fname: string = '';
  lname: string = '';
  password: string = '';
  confirmPassword: string = '';
  register: FormGroup | any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private redirectMenu: RedirectMenuService,
    private messageService: MessageService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  ngOnInit(): void {
    this.register = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      lname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      termsAndConditions: [false, Validators.requiredTrue],
    }, {
      validators: passwordMatchValidator, // Validate password and confirmPassword
    });
  }
  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }
  redirectToForgotPassPage() {
    this.router.navigate(['forgot']);
  }
  showAlert() {
    const alertDiv = this.renderer.createElement('div');
    this.renderer.addClass(alertDiv, 'alert');
    this.renderer.addClass(alertDiv, 'alert-success');
    this.renderer.setAttribute(alertDiv, 'role', 'alert');
    alertDiv.innerHTML = `Registration Successfull`;
    const alertContainer = this.el.nativeElement.querySelector('#alertContainer');
    if (alertContainer) {
      this.renderer.appendChild(alertContainer, alertDiv);
    }
  }
  onSubmit() {
      this.showAlert(); // Show the alert after successful form submission
      setTimeout(() => {
        this.redirect('user/login'); // Redirect after showing the alert
      }, 1000);
    } 
  
}
