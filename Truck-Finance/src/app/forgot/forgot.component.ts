import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

 
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  email:string =''

 

 

 

  forgot:FormGroup|any;

 

 

 

  constructor(private fb: FormBuilder,
    private redirectMenu : RedirectMenuService,) {}

 

  ngOnInit(): void {

 

    this.forgot = this.fb.group({

    email: ['', [Validators.required, Validators.email]],

    })

 

   }

 

   

   logindata(){

    console.log(this.forgot.value);

   

  }

  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }

onSubmit() {

 

  this.redirect('user/varification');
  // if (this.forgot && this.forgot.valid) {

 

  //   console.log('Form submitted');

 

  //   this.logindata();


 

  //   // this.showTopCenter();

 

   

 

  // }

 

  //  else {

 

  //   console.log('Please fill in all required fields.');

 

   

 

  // }

 

}

 
}
