import { Component, OnInit } from '@angular/core';

import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string =''
password : string='';
login:FormGroup|any;



  constructor(private router:Router,private fb: FormBuilder,
   private redirectMenu : RedirectMenuService,
    ) {} 
  ngOnInit(): void {
    this.login = this.fb.group({

    // lname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],

 

    email: ['', [Validators.required, Validators.email]],

 

    password: ['', [Validators.required]],

 

    // Confirmpassword: ['', [Validators.required]],

 

    // termsAndConditions: [false, Validators.requiredTrue],

 

 

 

    })

 

   }

   logindata(){

    console.log(this.login.value);

  }
   
  logincred() {

    if (this.email === 'james@gmail.com' && this.password === 'james@123') {
      return true
    } else {
     return false
    }
  }
  
  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }

 

redirectToForgotPassPage(){

 

  this.router.navigate(['forgot']);

 

}

 

onSubmit() {
  if (this.login && this.login.valid) {

    // console.log('Form submitted');
    // this.logindata();
    this.redirect('rm-home-page')
    this.logincred()
  }
   else {
    console.log('Please fill in all required fields.');
  }

}
}



 

 

 

 