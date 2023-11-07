import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import {FormGroup,FormControl,Validators} from '@angular/forms'
 import { RedirectMenuService } from 'src/services/redirect-menu.service';
// import { from } from 'rxjs';
@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent implements OnInit {
  userForm:FormGroup|any;
  arr:any[]=[];

  
  constructor(private router: Router, private redirectMenu : RedirectMenuService){}
    ngOnInit(): void {
    this.userForm = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z\s]*$'), Validators.maxLength(10)]),
        'email': new FormControl(null, [Validators.email, Validators.required]),
        'number': new FormControl(null, [Validators.required]),
        'address': new FormControl(null, [Validators.required]),
      }
    )
  }
  clicked1=true;
  clicked2=false;
  navigateToProfile() {
    if(this.clicked1){
      this.clicked2=true;
      this.clicked1=false;
      console.log(this.clicked1, this.clicked2);
      
    }
   this.router.navigate(['/main-profile']);
  }
  
  navigateToAccountSettings() {   
    this.router.navigate(['/profile-settings']);
  }
  navigateToEditProfile() {
    this.router.navigate(['../edit-profile']);
  }

  onSubmit(){
    alert("logged in")
    console.log(this.userForm);
    
  }
  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }
  
  
  // loginForm = new FormGroup({
  //   user:new FormControl('',[Validators.required]),
  //   email: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.required]),
  //   address: new FormControl('',[Validators.required])
  // })

}
