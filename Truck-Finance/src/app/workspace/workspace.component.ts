import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
import { AgGridModule } from 'ag-grid-angular';
import { JsonOperationService } from '../json-operation.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {

  myObserver;
  currentUrl: any;
  techDetailsParameter: any;
  default: string = '';

  constructor(private http: HttpClient, private router: Router,
    private redirectMenu: RedirectMenuService,
    private jsonOperation: JsonOperationService) {
    this.myObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          if (this.techDetailsParameter.comp == "credit") {
            this.default = "No";
            this.pushData(this.techDetailsParameter);
          } else if (this.techDetailsParameter.comp == "apply") {
            this.default = "No";
            this.updateData(this.techDetailsParameter);
          }
        }
      }
    });
  }

  ngOnInit() {
    // this.rowData$ = this.http.get<any[]>('../../assets/JSONfiles/workspace.json');
    if (this.default != "No") {
      this.http.get<any[]>('../../assets/JSONfiles/workspace.json').subscribe((data: any) => {
        this.rowData$ = data;
      });
    }


  }



  title = 'aggridpro';
  columnDefs: ColDef[] = [
    { field: 'appID' },
    { field: 'customerName' },
    { field: 'carSelection', headerName:'Asset Selection' },
    { field: 'financing' },
    {
      field: 'status', width: 100, cellStyle: function (params) {
        if (params.node.data.status == 'Approved') {
          return {
            'color': 'white', 'text-align': 'center', 'border-radius': '20px',
            'border-top': 'solid 3.5px #F4F6FB',
            'line-height': '2.3',
            'font-size': '11.5px',
            'font-family': 'Verdana', 'font-weight': '500',
            'border-left': 'solid 5px #F4F6FB',
            'border-right': 'solid 5px #F4F6FB',
            'border-bottom': 'solid 3.5px #F4F6FB',
            'padding-top': '-50px',
            'margin-top': '0', 'background-color': '#0A8835'
          };
        } else if (params.node.data.status == 'Rejected') {
          return {
            'color': 'white', 'text-align': 'center', 'border-radius': '20px',
            'border-top': 'solid 3.5px #F4F6FB',
            'line-height': '2.3',
            'font-size': '11.5px',
            'font-family': 'Verdana', 'font-weight': '500',
            'border-left': 'solid 5px #F4F6FB',
            'border-right': 'solid 5px #F4F6FB',
            'border-bottom': 'solid 3.5px #F4F6FB',
            'padding-top': '-50px', 'margin-top': '0', 'background-color': '#DB2423'
          };
        } else if (params.node.data.status == 'Prospect') {
          return {
            'color': 'white', 'text-align': 'center', 'border-radius': '20px',
            'border-top': 'solid 3.5px #F4F6FB',
            'line-height': '2.3',
            'font-size': '11.5px',
            'font-family': 'Verdana', 'font-weight': '500',
            'border-left': 'solid 5px #F4F6FB',
            'border-right': 'solid 5px #F4F6FB',
            'border-bottom': 'solid 3.5px #F4F6FB',
            'padding-top': '-50px', 'margin-top': '0', 'background-color': '#0381BA'
          };
        } else if (params.node.data.status == 'Pending') {
          return {
            'color': 'black', 'text-align': 'center', 'border-radius': '20px',
            'border-top': 'solid 3.5px #F4F6FB',
            'line-height': '2.3',
            'font-size': '11.5px',
            'font-family': 'Verdana', 'font-weight': '500',
            'border-left': 'solid 5px #F4F6FB',
            'border-right': 'solid 5px #F4F6FB',
            'border-bottom': 'solid 3.5px #F4F6FB',
            'padding-top': '-50px', 'margin-top': '0', 'background-color': '#E2B133'
          };
        } else {
          console.log(params.node.data.status);
          return {
            'color': 'white', 'text-align': 'center', 'border-radius': '20px',
            'border-top': 'solid 3.5px #F4F6FB',
            'line-height': '2.3',
            'font-size': '11.5px',
            'font-family': 'Verdana', 'font-weight': '500',
            'border-left': 'solid 5px #F4F6FB',
            'border-right': 'solid 5px #F4F6FB',
            'border-bottom': 'solid 3.5px #F4F6FB',
            'padding-top': '-50px', 'margin-top': '0', 'background-color': 'yellow'
          };
        }


      }
    }
  ];

  gridOptions = {
    defaultColDef: {
      sortable: true,
      filter: true,
      // floatingFilter: true,
      width: 195,
      maxWidth: 195,
      cellStyle: { 'font-family': 'Verdana', 'font-weight': '500', 'font-size': '11.5px' }
    },
    headerHeight: 30
  };
  // public rowData$!: Observable<any[]>;
  public rowData$!: any[];
  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

  onCellClicked(data: any) {
    console.log("data in table", data);
    console.log("tparam for table", this.techDetailsParameter);

    if (data.colDef.field === 'status') {
      let transferData;
      if (data.data.appID == "UNE8967") {
        transferData = {};
        transferData = {
          tableData: data.data,
          pramData: {
            "image": "../../assets/Truck3.png",
            "name": "T880",
            "price": "3,67,840,",
            "applicationId": "UNE8967",
            leftcard: {
              "currentInstallment": "$1,420",
              "downpayment": "$12,000",
              "repaymentfrequency": "Monthly",
              "APR": "7.9%",
              "addonInstallment": "$0",
              "yourfinalinstallment": "$1,420",
              "yourfirstpayment": "$14,420"
            },
            truckList: this.techDetailsParameter.truckList,
            detailsList: this.techDetailsParameter.detailsList
            
          },
          "comp": "credit"
        }
      } else if (data.data.appID == "UNE9445") {
        transferData = {};
        transferData = {
          tableData: data.data,
          pramData: {
            "image": "../../assets/Truck2.png",
            "name": "T680 Signature Edition",
            "price": "2,86,384,",
            "applicationId": "UNE9445",
            leftcard: {
              "currentInstallment": "$1,420",
              "downpayment": "$12,000",
              "repaymentfrequency": "Monthly",
              "APR": "7.9%",
              "addonInstallment": "$0",
              "yourfinalinstallment": "$1,420",
              "yourfirstpayment": "$14,420"
            },
            truckList: this.techDetailsParameter.truckList,
            detailsList: this.techDetailsParameter.detailsList
          },
          "comp": "credit"
        }

      } else {
        transferData = {
          tableData: data.data,
          pramData: this.techDetailsParameter,
          truckList: this.techDetailsParameter.truckList,
          detailsList: this.techDetailsParameter.detailsList
        }
      }
      console.log("helloooooo", data.data.status);
      
      if (data.data.status == "Pending") {
        this.redirectMenu.redirectWithdata("apply-now-pending", transferData);
      } else if (data.data.status == "Approved") {
        this.redirectMenu.redirectWithdata("apply-now-approve", transferData);
      }
    }
  }
  numberWithCommas(x: any) {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }

  pushData(ipData: any) {
    // {"appID":"UNE8783", "customerName":"Jane Cooper", "carSelection":"2023 Toyota Glanza", "financing":"$1,40,000", "status":"Pending"},
    let data = {
      appID: ipData.applicationId,
      customerName: "John Smith",
      carSelection: "T680,W990",
      financing: '$' + this.numberWithCommas(ipData.price)+ '0',
      status: "Pending"
    }

    this.jsonOperation.pushData(data).subscribe(
      print => {
        this.rowData$ = print;
      }
    )
  }
  updateData(ipData: any) {

    console.log("updating data", ipData);

    // {"appID":"UNE8783", "customerName":"Jane Cooper", "carSelection":"2023 Toyota Glanza", "financing":"$1,40,000", "status":"Pending"},
    let data = {
      appID: ipData.tableData.appID,
      customerName: ipData.tableData.customerName,
      carSelection: ipData.tableData.carSelection,
      financing: ipData.tableData.financing,
      status: ipData.status
    }

    this.jsonOperation.pushData(data).subscribe(
      print => {
        this.rowData$ = print;
      }
    )
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return (
      [
        this.padTo2Digits(date.getDate()),
        this.padTo2Digits(date.getMonth() + 1),
        date.getFullYear()
      ].join('-'))
  }

  currentDate = this.formatDate(new Date())
}
