import { Component, Input, OnInit } from '@angular/core';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Input() navtheme?:string;

  txtcolor='white';
  aurologo='../../assets/Aurionpro.png';
  bgcolor='rgba(0, 0, 0, 0)';
  btnborder='';
  btncolor='';
  bgpad='';
  bgwidth ='';

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
  


  redirect(path : string){
    this.redirectService.redirectTo(path);
  }

}
