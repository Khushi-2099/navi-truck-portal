import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-home-car-collec',
  templateUrl: './home-car-collec.component.html',
  styleUrls: ['./home-car-collec.component.scss']
})
export class HomeCarCollecComponent {
  constructor(private router:Router, private redirectMenu : RedirectMenuService){

  }


  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }
  value: number = 50;
  carDetails=[
    {
      name:"W990",

      price: "$366,267",

      imgUrl: "../../assets/Truck5.png",

      speed: 'MX-13',

      gear:"1,850lb",

      capacity:300,

      type:"510 HP"

      

    },

    {

      name:"T680",

      price: "$172,784",

      imgUrl: "../../assets/Truck2.png",

      speed: 'MX-13',

      gear:"1,850lb",

      capacity:120,

      type:"455 HP"

    },

    {

      name:"T880",

      price: "$367,840",
      imgUrl: "../../assets/Truck3.png",

      speed: 'MX-13',

      gear:"1,850 lb",

      capacity:150,

      type:"510 HP"

    },

    {

      name:"T280",

      price: "$271,840",

      imgUrl: "../../assets/Truck4.png",

      speed: 'PX-9',

      gear:"1,250lb",

      capacity:12.9 ,

      type:"450 HP"

    },

    {


      name:"W900",

      price: "$284,640",

      imgUrl : "../../assets/W900.png", 

      speed: 'MX-13',

      gear:"1,850 lb",

      capacity:300,

      type:"625 HP"

    },

    {

      name:"T380",

      price: "$171,120",

      imgUrl: "../../assets/Truck6.png",

      speed: 'PX-9',

      gear:"1,250lb",

      capacity:12.5,

      type:"450 HP"

    },

    // {

    //   name:"LF 260",

    //   price: "$47,390",

    //   imgUrl: "../../assets/CamryModelImage 2.png",

    //   speed: 'PX-7',

    //   gear:"6 cylinder",

    //   capacity:6.7,

    //   type:"264HP"

    // },

    // {

    //   name:"LF 290",

    //   price: "$47,390",

    //   imgUrl: "../../assets/CamryModelImage 2.png",

    //   speed: 'PX-7',

    //   gear:"6 cylinder",

    //   capacity:6.7,

    //   type:"295HP"

    // },

    // {

    //   name:"XF FTT",

    //   price: "$47,390",

    //   imgUrl: "../../assets/CamryModelImage 2.png",

    //   speed: 'MX-13',

    //   gear:"Automatic",

    //   capacity:12.9,

    //   type:"530HP/2,600 Nm"

    // },
    
   
    
    
  ]

}
