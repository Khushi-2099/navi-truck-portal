import { Component } from '@angular/core';
import { NavbarAfterHomePageComponent } from '../navbar-after-home-page/navbar-after-home-page.component';
import { accountDetails, disbursmentdetails } from './approved-data';
import { GridOptions, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent {

  numberWithCommas(x: any) {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }
  accountDetails = accountDetails;
  disbursmentdetails = disbursmentdetails;
  myObserver;
  currentUrl: any;
  techDetailsParameter: any;
  // isCarCardVisible:boolean = false;
  isCarCardVisible1: boolean = false;
  package: string = 'Standard'
  // ORC : number = 1972.09;

  public rowData$!: Observable<any[]>;

  isCarCardVisible: boolean[] = [];

  toggleCarCardVisibility(index: number) {
    this.isCarCardVisible[index] = !this.isCarCardVisible[index];
  }
  carDetails = [
    {
      name: "Audi A8 L 2022",
      price: 8200,
      imgUrl: ""
    },
  ]
  white = "../../../assets/logos/heart.png";
  red = "../../../assets/logos/heartred.png"
  heartURL = this.white;
  // gridOptions: GridOptions;
  // rowData: any[];
  showAccount = false;
  showTransaction = false;
  showDisbursement = false;
  activeLink: string | null = null;
  showAccountDetails() {
    this.showAccount = true;
    this.showTransaction = false;
    this.showDisbursement = false;
    this.activeLink = 'GIRO';
  }
  showTransactionTable() {
    this.showAccount = false;
    this.showTransaction = true;
    this.showDisbursement = false;
    this.activeLink = 'Repayment Schedule';
  }
  showDisbursementDetails() {
    this.showAccount = false;
    this.showTransaction = false;
    this.showDisbursement = true;
    this.activeLink = 'Disbursement History';
  }
  customCellRenderer(params: any) {
    return '<div class="ag-cell">' + params.value + '</div>';
  }
  ngOnInit() {
    this.rowData$ = this.http.get<any[]>('../../assets/JSONfiles/approved-data.json');
    if (this.techDetailsParameter.pramData.pramData.option == 0) {
      this.package = "Standard"
    }
    else {
      this.package = "Advanced"
    }
  }
  
  constructor(private router: Router, private http: HttpClient, private redirectMenu: RedirectMenuService,
  ) {
    this.myObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          console.log("approve component", this.techDetailsParameter);
        }
      }
    });
    // this.gridOptions = {

    //   columnDefs: [
    //     { headerName: 'Date', field: 'date' },
    //     { headerName: 'Type', field: 'description' },
    //     { headerName: 'EMI', field: 'emi' },
    //     { headerName: 'Principle', field: 'amount' },
    //     { headerName: 'Intrest', field: 'intrest' },
    //     { headerName: 'Loan Amount', field: 'LoanAmount'},
    //     { headerName: 'APR', field: 'apr' },
    //   ],
    // };
    // 
    // this.rowData = [
    //   { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
    //   { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
    //   { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
    //   { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
    //   { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
    //   { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },

    // ];
  }
  defaultColDef = {
    sortable: true,
    width: 100
  };
  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }
  columnDefs: ColDef[] = [
    { field: 'Is Cash', cellStyle: { 'font-size': '12px' } },
    { field: 'Flow Direction', cellStyle: { 'font-size': '12px' } },
    { field: 'Status', cellStyle: { 'font-size': '12px' } },
    { field: 'Allocation Status', cellStyle: { 'font-size': '12px' } },
    { field: 'Installment', cellStyle: { 'font-size': '12px' } },
    { field: 'Type', cellStyle: { 'font-size': '12px' } },
    { field: 'Calc Date', cellStyle: { 'font-size': '12px' } },
    { field: 'Currency', cellStyle: { 'font-size': '12px' } },
    { field: 'Gross Amount', cellStyle: { 'font-size': '12px' } },
    { field: 'Amount', cellStyle: { 'font-size': '12px' } },
    { field: 'Bank Account', cellStyle: { 'font-size': '12px' } },
    { field: 'Business Unit', cellStyle: { 'font-size': '12px' } },
    { field: 'Party Name', cellStyle: { 'font-size': '12px' } },

  ]
}

