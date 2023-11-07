import { Dialog } from '@angular/cdk/dialog';

import { Component, OnInit } from '@angular/core';

import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

import { NavigationEnd, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

// import { Router } from '@angular/router';

import { RedirectMenuService } from 'src/services/redirect-menu.service';

import { MessageService } from 'primeng/api';

import { leftcard } from '../carddetails';

 

// import { Route } from '@angular/router';

@Component({

  selector: 'app-credit-information',

  templateUrl: './credit-information.component.html',

  styleUrls: ['./credit-information.component.scss'],

})

export class CreditInformationComponent implements OnInit {

  isChecked: boolean = false;

  myObserver;

  currentUrl: any;
  ORC: number = 8173.90;
  techDetailsParameter: any;

  creditScreenData: any;
  display_First_Pay: number = 0
  leftcard = leftcard;
  currentInstallment : any;

  taxes:Number =0;

  DSR_ratio : number | undefined ;

  uploadedFiles: any[] = [];

  showCredit: boolean = true;

  submitPopup: boolean = false;

  isShowInfoMsg: boolean = false;

  text: any;
  asset:any;
  liabilities:any;
  
  expense:any;
  debt:any;
   
  dsr:any;
  
  text1: any = 'chooseOption';


  txt_full_arr: { dropdownVal: string; cost: number }[] = [];

  txt_full_arr1: { dropdownVal: string; cost: number }[] = [];

  txt_full_arr2: { dropdownVal: string; cost: number }[] = [];

  txt_full_arr3: { dropdownVal: string; cost: number }[] = [];

 

  sum: number = 0;

  sum1: number = 0;

  sum2: number = 0;

  sum3: number = 0;

 

  package: string = 'Standard';
  isCarCardVisible: boolean[] = [];

  toggleCarCardVisibility(index: number) {
    this.isCarCardVisible[index] = !this.isCarCardVisible[index];
  }

  romDigits: any[] = [

    '(i)',

    '(ii)',

    '(iii)',

    '(iv)',

    '(v)',

    '(vi)',

    '(vii)',

    '(viii)',

    '(ix)',

    '(x)',

  ];

 

  constructor(

    private messageService: MessageService,

    private dialog: Dialog,

    private router: Router,

    private redirect: RedirectMenuService

  ) {

    this.myObserver = this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        this.currentUrl = event.url;

        const navigation = this.router.getCurrentNavigation();

        if (navigation?.extras.state) {

          this.techDetailsParameter = navigation.extras.state;
          console.log("Taxes");
          
          this.taxes = Number(this.techDetailsParameter.price) * 0.11;
          this.currentInstallment = this.techDetailsParameter.leftcard.currentInstallment;

          console.log('from credit comp', this.techDetailsParameter);

        }

      }

    });

  }

  ngOnInit(): void {

    if (this.techDetailsParameter.option == 0) {

      this.package = 'Standard';

    } else {

      this.package = 'Advanced';

    }

    

  }

  yearly:any='';
  optcost:any='';
  netcost:any = '';
  netcost1:any = '';
  // isCarCardVisible:boolean = false;
  isCarCardVisible1:boolean = false;

  calcnetcost(){
    
    
  this.netcost =  this.yearly - this.optcost;
  this.netcost1='$'+this.netcost;

  console.log("netcost "+this.yearly);
  
  }
  calDsr(){
   console.log("eee")

     this.DSR_ratio= this.netcost/this.debt;
     console.log(this.netcost);
     console.log(this.debt);
     
     this.dsr=(Math.round(this.DSR_ratio * 100) / 100).toFixed(2);

     


    
     
  }
  
  

  onSubmit() {

    this.showCredit = false;

    this.submitPopup = true;

  }

 

  onClicked1() {

    this.isChecked = true;

    this.isShowInfoMsg = true;

    this.showCredit = false;

    setTimeout(() => {

      this.isShowInfoMsg = false;

      this.showCredit = true;

    }, 2000);

  }

 

  onOk() {

    this.techDetailsParameter.comp = 'credit';

    this.showCredit = true;

    this.redirect.redirectWithdata('work-space', this.techDetailsParameter);

  }


  redirectToApplyNow() {

    this.techDetailsParameter.leftcard = this.leftcard;

    this.redirect.redirectWithdata(

      'apply-now-flow-1',

      this.techDetailsParameter

    );

  }

 

  onCancel1() {

    this.showCredit = true;

    this.isShowInfoMsg = false;

  }

  numberWithCommas(x: any) {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  }

  onCancel() {

    this.techDetailsParameter.comp = 'credit';

    this.showCredit = true;

    this.redirect.redirectWithdata('work-space', this.techDetailsParameter);

  }
  changevalue(){

    this.expense=this.yearly-this.optcost;
    
      
  }



  add(txt: any, txt1: any, module: any) {

    if (txt != '' && txt1 != 'chooseOption') {

      switch (module) {
        case 'assetAdd':
          this.text = '$ ' + txt;
            this.txt_full_arr.push({ dropdownVal: `${txt1}`, cost: this.text});
            this.sum += Number(txt);
          break;
        case 'incomeAdd':
          this.text = '$ ' + txt;
          this.txt_full_arr1.push({ dropdownVal: ` ${txt1}`, cost: this.text });
          this.sum1 += Number(txt);
       
          break;

        case 'expenseAdd':

            this.text = '$ ' + txt;

            this.txt_full_arr2.push({ dropdownVal: ` ${txt1}`, cost: this.text });

            this.sum2 += Number(txt);
         
          break;

        case 'liabilityAdd':

            this.text = '$ ' + txt;

            this.txt_full_arr3.push({ dropdownVal: ` ${txt1}`, cost: this.text });

            this.sum3 += Number(txt);
          
      }

    }

  }

 

  getAssetLabel(index: number) {

    let assetLabel = document.getElementById('assetLabel')!;

    return index === 0

      ? (assetLabel.innerHTML =

          'Asset Type ' + this.romDigits[index])

      : this.romDigits[index];

  }

 

  getIncomeLabel(index: number) {

    let incomeLabel = document.getElementById('incomeLabel')!;

    return index === 0

      ? (incomeLabel.innerHTML =

          'Income Type &nbsp;&nbsp;&nbsp;' + this.romDigits[index])

      : this.romDigits[index];

  }

 

  alignText(index: number) {

    return { 'text-align': 'right', width: '20%', 'font-family': 'Verdana' };

  }

}

 