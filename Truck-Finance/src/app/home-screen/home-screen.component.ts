import { Component, OnInit, Input, HostListener, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RedirectMenuService } from 'src/services/redirect-menu.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  
  buttonStyle: any;
  constructor(
    private redirectMenu : RedirectMenuService,
     ) {} 
  @ViewChild(NavbarComponent) Navbar: NavbarComponent | undefined;

  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const threshold = window.innerHeight ; 
    if (scrollPosition >= threshold) {
      this.Navbar?.setBackground("black");
    } else {
      this.Navbar?.setBackground(""); 
    }
  }

  isClicked: boolean = false;

  changeColor() {
    this.isClicked = true;
  }

  onSubmit(){
   
    
    this.redirectMenu.redirectTo('how-it-works')
  }
 
}
