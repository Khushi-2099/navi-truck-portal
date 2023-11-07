import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

declare var $: any;

@Component({
  selector: 'app-car-subs',
  templateUrl: './car-subs.component.html',
  styleUrls: ['./car-subs.component.scss']
})
export class CarSubsComponent implements OnInit{

  myObserver ;
  currentUrl : any;
  techDetailsParameter : any;
  specificaiton : any;
  EMI: any;
  colorList: string[] = [];
  finalEMI: number = 0;
  // selectedColor: string = '45473D';
  
  
  constructor(   private redirectMenu : RedirectMenuService,
    private router: Router,
    ){
      this.myObserver = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          console.log("tech param",this.techDetailsParameter);
        } 
        }
      });
    }

    
          carDetails=[
            {
              name:"2023 Toyota Glanza",
              engine_capacity:"2.8L/213",
              transmmission_type : "Mannual",
              Fuel_Type: "Petrol",
              color_options:{
                  white:"White",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              },
              emi:'811',
            },
            {
              name:"2023 Toyota Fortuner",
              engine_capacity:"3.5L/213",
              transmmission_type : "Automatic",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"White",
                  black:"Black",
                  grey:"Grey"
              },
              emi:'2,778',
             
            },
            {
              name:"2023 Toyota Innova Crysta",
              engine_capacity:"2.2L/213",
              transmmission_type : "Automatic",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"White",
                  black:"Black",
                  blue:"Blue",
              },
              emi:'1,400'
            },
            {
              name:"2023 Toyota Vellfire ",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"White",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Urban Cruiser ",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"White",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"Toyota Camry",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"White",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Glanza",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"White",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Fortuner",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"White",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Innova Crysta",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"White",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            }
            
          ]
          
          ngOnInit(){
            this.filterDetails();
            $(document).ready(function () {
              $("#demo").vc3dEye({
                imagePath: "../../assets/3Dimages/",// the location where you’ve put the images.
                totalImages: 50,// the number of images you have.
                imageExtension: "jpg" // the extension of the images. Make sure all the images have same extension.
      });
    });
  }
  percentageValue: number = 35; // Initial percentage value

  // Function to update the percentage value when the slider changes
  updatePercentage(event: Event): void {
    const sliderValue = (event.target as HTMLInputElement).value;
    this.percentageValue = parseFloat(sliderValue);
  }
  
  isUpperVisible=true
  isLowerVisible=false
  onClick(){
    if (this.isUpperVisible){
      this.isUpperVisible=false
    }else{
      this.isUpperVisible=true
    }
  }
 
  
 

  getColorList(spec : any){
      let colors = Object.keys(spec.color_options).map(key=> spec.color_options[key]);
      let flattenedColor = [].concat(...colors);
      this.colorList.push(...flattenedColor);
  }

filterDetails(){
   this.specificaiton = this.carDetails.find((element)=> element.name == this.techDetailsParameter.name);   
   this.getColorList(this.specificaiton);
}

  onPress(){
    if (this.isLowerVisible){
      this.isLowerVisible=false
    }else{
      this.isLowerVisible=true
    }
  }

  outline(event:Event){
    (<HTMLButtonElement>event.target).style.outlineColor=(<HTMLButtonElement>event.target).id
  }

  

// outline(event: Event, color: string) {
//   this.selectedColor = color; // Update the selected color
//   const buttons = document.querySelectorAll('.redbtn.btn') as NodeListOf<HTMLButtonElement>;
//   buttons.forEach(button => {
//     button.style.outlineColor = button.id === color ? color : '#ffffff'; // Set outline color based on selected color
//   });
// }


// selectedColor: string = '45473D';

// outline(color: string) {
//   this.selectedColor = color;
// }



  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }

  onSubmit(){
    this.redirect('apply-now-flow-1');
}

applyNow(){
  console.log("tec detsia",this.techDetailsParameter);
  let data = {
    image : this.techDetailsParameter.imgUrl,
    name : this.techDetailsParameter.name,
    price : this.techDetailsParameter.price,
    emi : this.finalEMI
  }
  this.redirectMenu.redirectWithdata('apply-now-flow-1',data);
}

calculateEMI(Price: string) {
  let price = Price.replace(/,/g, '');
  let totalCarPrice : number = parseFloat(price);
  let annualVerdanaestRate: number = 7;
  let  tenureInYears: number = 2;
  const monthlyVerdanaestRate = (annualVerdanaestRate / 12) / 100;
  const numberOfMonths = tenureInYears * 12;
  
  const roughemi = (totalCarPrice * monthlyVerdanaestRate * Math.pow(1 + monthlyVerdanaestRate, numberOfMonths)) / (Math.pow(1 + monthlyVerdanaestRate, numberOfMonths) - 1);
  const emi = Math.trunc(roughemi);
  this.finalEMI = emi;
  return emi;
}
}