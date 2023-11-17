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
      name:"2024 LoneStar",

      price: "$180,822",

      imgUrl: "../../assets/NaviStar/2024-Lonestar/truck-lonestar.png",

      speed: 'X-15',

      gear:"2,050lb",

      capacity:60.6,

      type:"605 HP"

      

    },

    {

      name:"2024 RH613",

      price: "$180,822",

      imgUrl: "../../assets/NaviStar/2024-RH613/truck-rh613.png",

      speed: 'Int. A26',

      gear:"1,850lb",

      capacity:60,

      type:"515 HP"

    },

    {

      name:"2023 CV515",

      price: "$180,822",

      imgUrl: "../../assets/NaviStar/2023-CV515/truck-cv515.png",

      speed: 'Int. 6.6',

      gear:"700lb",

      capacity:19.5,

      type:"350 HP"

    },

    {

      name:"2024 MV607",

      price: "$180,822",

      imgUrl: "../../assets/NaviStar/2024-MV607/truck-mv607.png",

      speed: 'L-9',

      gear:"1,150lb",

      capacity:54.6 ,

      type:"360 HP"

    },

    {


      name:"2024 HV513",

      price: "$180,822",

      imgUrl : "../../assets/NaviStar/2024-HV513/truck-hv513.png", 

      speed: 'Int. A26',

      gear:"1,850lb",

      capacity:74,

      type:"515 HP"

    },

    {

      name:"2024 HX620",

      price: "$180,822",

      imgUrl: "../../assets/NaviStar/2024-HX620/truck-hx620.png",

      speed: 'X-15',

      gear:"2,050lb",

      capacity:74,

      type:"605 HP"

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
