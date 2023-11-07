import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
 i: number | undefined;
  constructor(private router:Router, private redirectMenu : RedirectMenuService){

  }


  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }


  redirectto(num:number){
    if(num==0){
      this.redirectMenu.redirectTo('user/login');
    }
    else if(num==1){
      window.location.href = 'http://smefunctional:81/';

    }
   
  }
  value: number = 50;
  carDetails=[
    {
      name:"Auto Finance",
      price: "$17,949",
      imgUrl : "https://c4.wallpaperflare.com/wallpaper/897/103/818/2012-kenworth-t680-tractor-semi-desktop-images-wallpaper-preview.jpg",
      speed: 2000,
      gear:"Manual",
      capacity:5,
      type:"Petrol",
      subscription:"If you’re after a truck, and want to lease or loan, then an Aurionpro Auto Finance could for you"
    },
    {
      name:"Retail Finance",
      price: "$61,490",
      imgUrl: "../../assets/RetailFinance.png",
      speed: 3577,
      gear:"Automatic",
      capacity:7,
      type:"Diesel",
      subscription:"Quote and Submit Applications with Retail Hub"
    },
    {
      name:"Inventory  Finance",
      price: "$30,990",
      imgUrl: "../../assets/Inventory.png",
      speed: 4200,
      gear:"Automatic",
      capacity:7,
      type:"Diesel",
      subscription:"Review Transactions Make Payments online"
    },
    {
      name:"My Account Access",
      price: "$130,830",
      imgUrl: "../../assets/MyAccount.png",
      speed: 2500,
      gear:"CVT",
      capacity:8,
      type:"Petrol",
      subscription:"Login to manage your Account Make Payments online"
      
    },
    {
      name:"Beacome a Dealer ",
      price: "$25,989",
      imgUrl: "../../assets/dealer.png",
      speed: 4000,
      gear:"Automatic",
      capacity:4,
      type:"Electric",
      subscription:"Interested in providing retail  finance for your customer or looking for an inventory floor   plan for your dealership?    "
     
    },
    {
      name:"Find a Dealer",
      price: "$47,390",
      imgUrl: "../../assets/customer.png",
      speed: 2593,
      gear:"Automatic",
      capacity:5,
      type:"Hybrid",
      subscription:"Our Accredited Dealers provide a one-stop-shop for your needs, and will be able to arrange the most finance option for you."
    },
    
   
    
    
  ]

}
