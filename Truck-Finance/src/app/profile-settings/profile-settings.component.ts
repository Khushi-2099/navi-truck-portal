import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  providers: [MessageService]
})
export class ProfileSettingsComponent implements OnInit{
  constructor(private router: Router, private messageService: MessageService,
    private renderer: Renderer2,
    private el: ElementRef){}
  ngOnInit(): void {
    const link1 = document.getElementById("link1") as HTMLElement;
    const numberInput = document.getElementById("number") as HTMLInputElement;
    const link2 = document.getElementById("link2") as HTMLElement;
    link1.addEventListener("click", () => {
      numberInput.focus();
    });
    link2.addEventListener("click", ()=>{
      numberInput.value = " ";
    });
  
  }
  showAlert() {
    const alertDiv = this.renderer.createElement('div');
    this.renderer.addClass(alertDiv, 'alert');
    this.renderer.addClass(alertDiv, 'alert-success');
    this.renderer.setAttribute(alertDiv, 'role', 'alert');
    alertDiv.innerHTML = `Account settings saved successfully`;
    const alertContainer = this.el.nativeElement.querySelector('#alertContainer');
    if (alertContainer) {
      this.renderer.appendChild(alertContainer, alertDiv);
    }
  }
  navigateToProfile() {
    this.router.navigate(['/main-profile']);
  }
  clicked1=true;
  clicked2=false;
  navigateToAccountSettings() {
    if(this.clicked2){
      this.clicked2=false;
      this.clicked1=true;
      console.log(this.clicked1, this.clicked2);
      
    }
    this.router.navigate(['/profile-settings']);
  }
  showBottomCenter() {
    this.showAlert()
    // this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Account Setting has been updated successfully' });
    console.log("clicked");
    //this.print(val1,val2,val3,val4)
}
clicked3=true;
clicked4=true;
enableclick(){
  this.clicked4=false;
  if(this.clicked3){
    this.clicked4=true;
    this.clicked3=false;
    console.log(this.clicked3, this.clicked4);
    
  }
}
disableclick(){
  this.clicked3=false;
  if(this.clicked4){
    this.clicked4=false;
    this.clicked3=true;
    console.log(this.clicked3, this.clicked4);
    
  }
}
clicked5=true;
clicked6=true;
changeclick(){
  this.clicked6=false;
  if(this.clicked5){
    this.clicked6=true;
    this.clicked5=false;
    console.log(this.clicked5, this.clicked6);  
  }
}
removeclick(){
  this.clicked5=false;
  if(this.clicked6){
    this.clicked6=false;
    this.clicked5=true;
    console.log(this.clicked5, this.clicked6);
    
  }
}
}
