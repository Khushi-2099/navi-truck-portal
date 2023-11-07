import { Component } from '@angular/core';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
@Component({
  selector: 'app-homeupperpage',
  templateUrl: './homeupperpage.component.html',
  styleUrls: ['./homeupperpage.component.scss']
})
export class HomeupperpageComponent {
  constructor(
    private redirectMenu : RedirectMenuService,
     ) {} 
  // onSubmit(){
  //   this.redirectMenu.redirectTo('')
  // }
}
