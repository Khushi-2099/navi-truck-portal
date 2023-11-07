import { Component } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  constructor(private messageService: MessageService,
    private router: Router
    ){
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd){
           //scroll to top
           window.scrollTo(0,0);
        }
     });
    }
  title = 'car-portal';

  // ngOnInit(){
  //   this.router.navigate(['']);
  // } 

}
