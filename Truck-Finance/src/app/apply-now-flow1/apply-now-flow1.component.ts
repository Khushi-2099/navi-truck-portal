
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
import { leftcard } from '../carddetails';

import { Router, NavigationEnd } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
import { BooleanAdvancedFilterModel } from 'ag-grid-community';
@Component({
  selector: 'app-apply-now-flow1',
  templateUrl: './apply-now-flow1.component.html',
  styleUrls: ['./apply-now-flow1.component.scss']
})
export class ApplyNowFlow1Component implements OnInit {
  taxes: number | undefined;

  numberWithCommas(x: any) {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    
  }

  radio2 = 'Individual';
  radio1 = 'Individual';
  radio3 = '';
  radio4 = 'Individual';
  radio5 = 'Individual';
  // isCarCardVisible :boolean =false;
  isCarCardVisible1 :boolean =false;
  

  applicationId: string = '';
  lineItem: any;
  leftcard = leftcard;
  lastName: string = '';
  driversLicense: string = '';
  licenseClass: string = '';
  licenseNo: string = '';
  licenseValidity: string = '';
  fname: string = '';
  abn:string='';
  est:string='';
  writeus:string='';
  preferred:string='';
  phone:string='';
  fax:string='';
  gmail:string='';
  street1:string='';
  mailing:string='';
  alternate:string='';
  lname: string = '';
  mname: string = '';
  dob: string = 'date';
  mobile: string = '';
  home: string = '';
  email: string = '';
  citizen: string = '';
  resident: string = '';
  yearsataddress: string = '';
  ORC: number = 8173.90;
  street: string = '';
  city: string = '';
  state: string = '';
  country: string = '';
  zipcode: string = '';
  employer: string = '';
  yearsatjob: string = '';
  designation: string = '';
  remotework: string = '';
  workstreet: string = '';
  workcity: string = '';
  workstate: string = '';
  workzip: string = '';
  Driving_License_Class: any[] | undefined;
  Resident_status: any[] | undefined;
  total_amt: any;
  myObserver;
  currentUrl: any;
  techDetailsParameter: any;
  display_First_Pay: number = 0
  statuss: any;
  package: string = ''
  status : string = ''

  dp: any = this.leftcard.downpayment
  //  lastname: string = "Aurionpro";
  // driversLicense: string = "1223@"; 
  isCarCardVisible: boolean[] = [];

  toggleCarCardVisibility(index: number) {
    this.isCarCardVisible[index] = !this.isCarCardVisible[index];
  }

  ngOnInit(): void {
    if (this.techDetailsParameter.option == 0) {
      this.package = "Standard"
    }
    else {
      this.package = "Advanced"
    }

    this.Driving_License_Class = ["1L", "1R", "1", "2", "3", "4", "5", "6L and 6R"]
    this.Resident_status = ["Boarding", "Freehold", "Living with parents", "Mortgage", "Renting"]
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generates a random 4-digit number
    this.applicationId = `UNE${randomPart}`;
    this.lineItem = this.applicationId;
    this.techDetailsParameter.applicationId = this.applicationId;
    console.log("from apply now flow 1", this.techDetailsParameter);
    if (typeof this.techDetailsParameter.price == 'string') {
      this.total_amt = this.techDetailsParameter.price.replace(/[\$,]/g, '') - 0;
    }
    else {
      this.total_amt = this.techDetailsParameter.price - 0;
    }
    this.display_First_Pay =  (this.techDetailsParameter.emi)
    console.log("line", this.lineItem + " first payment " + this.display_First_Pay + this.dp.replace(/[\$,]/g, '') + " price " + this.techDetailsParameter.price + "          " + parseInt(this.techDetailsParameter.emi));
  }

  constructor(private router: Router, private fb: FormBuilder,
    private redirectMenu: RedirectMenuService, 
  ) {
    this.radio1 = "Business";
    this.myObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          this.taxes = Number(this.techDetailsParameter.price) * 0.11;
          console.log("Khusi's Page: ",this.techDetailsParameter);

        }
      }
    });


  }
  carDetails = [
    {
      name: "2023 Toyota Fortuner",
      price: "61,490",
      imgUrl: "../../assets/Toyota-Fortuner-110120211829 2.png",
    },
  ]
  white = "../../../assets/logos/heart.png";
  red = "../../../assets/logos/heartred.png"
  heartURL = this.white;
  isLowerVisible = false

  isLowerVisible1 = false
  isLowerVisible2 = false
  isLowerVisible3 = false
  onPress() {

    if (this.isLowerVisible) {

      this.isLowerVisible = false

    } else {

      this.isLowerVisible = true

    }

  }




  onPress1() {

    if (this.isLowerVisible1) {

      this.isLowerVisible1 = false

    } else {

      this.isLowerVisible1 = true

    }

  }
  onPress2() {

    if (this.isLowerVisible2) {

      this.isLowerVisible2 = false

    } else {

      this.isLowerVisible2 = true

    }

  }
  onPress3() {

    if (this.isLowerVisible3) {

      this.isLowerVisible3 = false

    } else {

      this.isLowerVisible3 = true

    }

  }


  // onSubmit(){
  //   this.router.redirectto()
  // }
  radioChanged(event: Event): void {
    const radio = event.target as HTMLInputElement;
    if (radio.checked) {
      // Set the desired value in the input boxes
      this.lastName = '';
      this.driversLicense = '';
    }
  }

  datapopulate(event: Event): void {
    const button = event.target as HTMLButtonElement;

    // Check if the event is a button click
    if (event.type === 'click' && button instanceof HTMLButtonElement) {

      this.licenseClass = '1L';
      this.licenseNo = 'DM123456';
      this.licenseValidity = '01/01/2026';
      this.fname = 'TNZ Enterprises Ltd';
      this.abn='10005247892';
      this.est='';
      this.writeus='';
      this.preferred='Email';
      this.phone='(021) 825 234';
      this.fax='(06) 455 4456';
      this.gmail='TNZcustomercare@hotmail.com';
      this.street1='Level1, 72 Archer Street';
      this.mailing='Level1, 72 Archer Street';
      this.alternate='Level1, 72 Archer Street';
      this.lname = 'Smith';
      this.mname = 'M';
      this.dob = '1975-10-11';
      this.mobile = '(+61) 3 9721 1500';
      this.home = '(+61) 3 4737 9530';
      this.email = 'john.smith@gmail.com';
      this.citizen = 'Australia';
      this.resident = 'Permanent';
      this.yearsataddress = 'Public Company';
      this.status = 'Registered'
      this.street = 'TNZ Centre, 833 Collins'; 

      // ,  VIC 3153, Australia  U 8 796 HIGH STREET KEW EAST, VICTORIA, 3102
      this.state = 'Victoria';
      this.city = 'Melbourne';
      this.country = 'Australia';
      this.zipcode = '3008';
      this.employer = 'Ace Viticulture LTD';
      this.yearsatjob = '03';
      this.designation = 'Manager';
      this.remotework = 'Yes';
      this.workstreet = 'U8 796 high street';
      this.workcity = 'Kew East';
      this.workstate = 'Victoria';
      this.workzip = '3102';

      this.onPress();
      this.onPress1();
      this.onPress2();
      this.onPress3();
    }
  }

  turnRed() {
    if (this.heartURL == this.white) {
      this.heartURL = this.red
    }
    else if (this.heartURL == this.red) {
      this.heartURL = this.white
    }
  }
  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

  redirectToForgotPassPage() {
    this.router.navigate(['credit-info']);

  }

  saveAndProceed() {
    this.techDetailsParameter.leftcard = this.leftcard;
    this.techDetailsParameter.leftcard.currentInstallment = this.techDetailsParameter.emi,
      console.log("onclic apllynow", this.techDetailsParameter);
    this.redirectMenu.redirectWithdata('credit-info', this.techDetailsParameter);
  }

  goBack() {
    this.techDetailsParameter.leftcard = this.leftcard;
    this.techDetailsParameter['imgUrl'] = this.techDetailsParameter['image'];
    // delete this.techDetailsParameter['image'];
    console.log("tech param goback", this.techDetailsParameter);
    this.redirectMenu.redirectWithdata('car-sub-redesign', this.techDetailsParameter);
  }

  clearForm() {
    this.licenseClass = '';
    this.radio2 = '';
    this.radio1 = '';
    this.status = '';
    this.licenseNo = '';
    this.licenseValidity = '';
    this.driversLicense = '';
    this.lastName = '';
    this.fname = '';
    this.abn='';
    this.est='';
    this.writeus='';
    this.preferred='';
    this.phone='';
    this.fax='';
    this.gmail='';
    this.street1='';
    this.mailing='';
    this.alternate='';
    this.lname = '';
    this.mname = '';
    this.dob = '';
    this.mobile = '';
    this.home = '';
    this.email = '';
    this.citizen = '';
    this.resident = '';
    this.yearsataddress = '';
    this.street = '';
    this.city = '';
    this.state = '';
    this.country = '';
    this.zipcode = '';
    this.employer = '';
    this.yearsatjob = '';
    this.designation = '';
    this.remotework = '';
    this.workstreet = '';
    this.workcity = '';
    this.workstate = '';
    this.workzip = '';
    this.statuss = 'false';
  }
  selectedValue: string = 'option1';

  getSelected(data:any){
    console.log('data',data);
    
    

  }
}





