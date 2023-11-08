import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// import { Subscription } from 'rxjs';
import { NavbarAfterHomePageComponent } from 'src/app/navbar-after-home-page/navbar-after-home-page.component';
import { DataHandlerService } from 'src/services/data-handler.service';


@Component({
  selector: 'app-homepage-upper',
  templateUrl: './homepage-upper.component.html',
  styleUrls: ['./homepage-upper.component.scss']
})
export class HomepageUpperComponent {
  @ViewChild(NavbarAfterHomePageComponent) Navbar!: NavbarAfterHomePageComponent ;
  box = document.getElementsByClassName('find-card-btn');
  clicked1=false;
  clicked2=true;

  vehicleOptions: string[] = [];

  // _isVisible: boolean = false;
  // dropdownControllerSubject: Subject<boolean> | undefined ;
  constructor(private dataHandlerService: DataHandlerService){
    this.vehicleOptions = this.dataHandlerService.getVehicleList();
    
    this.vehicleOptions.splice(0, 0, 'Select Vehicle');
  }
  switchCSS(){
    // this.box.style
    if(this.clicked1){
      this.clicked2=true
      this.clicked1=false
      console.log(this.clicked1,this.clicked2);
    }
  }

  switchCSS1(){
    if(this.clicked2){
      this.clicked2=false
      this.clicked1=true
      console.log(this.clicked1,this.clicked2);
    }
  }
  @Output() newEvent = new EventEmitter<Event>()
  close(){
      this.Navbar.isExpand = false;
      this.Navbar.isNotiExpand = false;
      this.Navbar.isProfileExpand = false;
  }
}
