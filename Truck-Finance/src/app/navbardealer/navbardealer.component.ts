import { Component, Input, OnInit } from '@angular/core';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-navbardealer',
  templateUrl: './navbardealer.component.html',
  styleUrls: ['./navbardealer.component.scss']
})
export class NavbarDealerComponent implements OnInit{
  isExpand = false;
  isNotiExpand = false;
  isProfileExpand = false;

  @Input() navtheme?:string;

  txtcolor='white';
  aurologo='../../assets/Aurionpro.png';
  bgcolor='rgba(0, 0, 0, 0)';
  btnborder='';
  btncolor='';
  bgpad='';
  bgwidth ='';

  @Input() dealerActive = false
  @Input() homeActive = false
  @Input() customerActive = false

  ngOnInit(): void {

    if (this.navtheme == 'blacktheme') {
      // TypeScript code
      window.addEventListener('scroll', () => {
        const navbar = document.getElementById('car-subs-nav');

        if (navbar) {
          const scrollThreshold = 10;

          if (window.scrollY > scrollThreshold) {
            this.txtcolor = 'white';
            this.bgcolor = 'black';
            this.aurologo='../../assets/Aurionpro.png';
            this.btncolor = 'white';
            this.bgwidth = '100%';
            this.bgpad = '61px'
          } else {
            // navbar.style.backgroundColor = '#333'; // Initial color
            this.txtcolor = 'white';
            this.bgcolor = 'rgba(0, 0, 0, 0)'
            this.btncolor = 'white';
            this.aurologo = '../../assets/Aurionpro.png';
            this.bgwidth = '91%';
            this.bgpad = '0px'
          }
        }
      });

      this.txtcolor = 'white';
      this.bgcolor = 'rgba(0, 0, 0, 0)';
      this.btncolor = 'white';
      this.aurologo = '../../assets/Aurionpro.png';
      this.bgwidth = '91%';
            this.bgpad = '0px'
    } else if (this.navtheme == 'whitetheme') {
      this.txtcolor = 'white';
      this.bgcolor = 'black';
      this.btncolor = 'white';
      this.aurologo='../../assets/Aurionpro.png';
      this.bgwidth = '100%';
      this.bgpad = '61px'
    }

  }

  constructor(
    private redirectService: RedirectMenuService
    ){
  }

  setBackground(color:string){
    if (color =='black'){

      this.txtcolor='black';
      this.bgcolor='white'
      this.aurologo='../../assets/Aurionpro.png';

    } else{
 
      this.txtcolor='white';
      this.bgcolor='rgba(0, 0, 0, 0)'
      this.aurologo='../../assets/Aurionpro.png';
    }
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
  
  expandConsumerBar() {
    if (this.isProfileExpand) {
      this.isProfileExpand = false
    } else {
      this.isProfileExpand = true
    }
    this.isNotiExpand = false
    this.isExpand = false
  }


  redirect(path : string){
    this.redirectService.redirectTo(path);
  }
  navigateToAnotherServer() {
    
    window.location.href = 'http://smefunctional:81/';
  }
}
