import { Component } from '@angular/core';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
@Component({
  selector: 'app-landinghomeupperpage',
  templateUrl: './landinghomeupperpage.component.html',
  styleUrls: ['./landinghomeupperpage.component.scss']
})
export class landingHomeupperpageComponent {
  constructor(
    private redirectMenu : RedirectMenuService,
     ) {} 
  onSubmit(){
    this.redirectMenu.redirectTo('howitworks2')
  }
}
