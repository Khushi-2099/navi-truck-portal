import { Component, OnInit, Input, HostListener, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { NavbarAfterHomePageComponent } from '../navbar-after-home-page/navbar-after-home-page.component';

@Component({
  selector: 'app-rm-homepage',
  templateUrl: './rm-homepage.component.html',
  styleUrls: ['./rm-homepage.component.scss']
})
export class RmHomepageComponent implements OnInit {
  @ViewChild(NavbarAfterHomePageComponent) Navbar: NavbarAfterHomePageComponent | undefined;
  constructor(
    private renderer: Renderer2
    ) {}
    element = document.getElementById("car-subs-nav");
  ngOnInit(): void {
    if (this.element) {
      // Get the scroll height
      const scrollHeight = this.element.scrollHeight;
      console.log(`Scroll Height: ${scrollHeight}`);
    }
  }

    // @HostListener('window:scroll', ['$event']) 
    // scrollHandler(event:Event) {
    //     console.debug("Scroll Event");
    //     // this.navtheme='';
    //   }

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

  location:any[]=["mumbai","delhi","goa","up","mp"]

  //=======================================================
}
