import { Component, OnInit,  Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-nav-bar-after-home-profile',
  templateUrl: './nav-bar-after-home-profile.component.html',
  styleUrls: ['./nav-bar-after-home-profile.component.scss']
})
export class NavBarAfterHomeProfileComponent implements OnInit{
  isExpand=false;
  isNotiExpand = false;
  isProfileExpand = false;

  @Input() navtheme?:string;

  txtcolor='';
  aurologo='';
  bgcolor='';
  like='';
  noti='';
  sett='';
  sideburger=''

  ngOnInit(): void {
    if (this.navtheme =='blacktheme'){
      this.txtcolor='white';
      this.bgcolor='rgba(0, 0, 0, 0)'
      this.aurologo='../../assets/Aurionpro.png';
      this.like='../../assets/logos/Like.png';
      this.noti='../../assets/logos/Notification.png';
      this.sett='../../assets/logos/Settings.png';
      this.sideburger='../../assets/logos/white-burger.png';
    } else if (this.navtheme =='whitetheme'){
      this.txtcolor='black';
      this.bgcolor='white'
      this.aurologo='../../assets/logos/logo.png';
      this.like='../../assets/MicrosoftTeams-image (4).png';
      this.noti='../../assets/MicrosoftTeams-image (5).png';
      this.sett='../../assets/MicrosoftTeams-image (6).png';
      this.sideburger='../../assets/MicrosoftTeams-image (3).png';
    }
  }

  constructor(private router:Router,
    private fb: FormBuilder,
    private redirectMenu : RedirectMenuService,
     ) {}

  expandSideBar(){

    if (this.isExpand){

      this.isExpand=false

    }else{

      this.isExpand=true

    }
    console.log(this.isExpand);

   

  }

  expandNotiBar() {
    if (this.isNotiExpand) {
      this.isNotiExpand = false
    } else {
      this.isNotiExpand = true
    }
    this.isProfileExpand = false
    this.isExpand = false
  }
  expandProfileBar() {
    if (this.isProfileExpand) {
      this.isProfileExpand = false
    } else {
      this.isProfileExpand = true
      this.isNotiExpand = false
      this.isExpand = false
    }
  }

  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }

}
