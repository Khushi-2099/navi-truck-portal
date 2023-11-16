import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JsonOperationService } from 'src/app/json-operation.service';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  vehicleList: string[] = [''];
  vehicleListMaster: string[] =  [];
  workspaceList:any[] = []
  workspaceDetails:any[] = []
  private rowDataSubject = new BehaviorSubject<any[]>([]);
  public rowData$ = this.rowDataSubject.asObservable();

  constructor( private jsonOperation: JsonOperationService, private http: HttpClient) { 
    this.vehicleListMaster =  this.vehicleDetails.map(x => x.name);
    this.setVehicleList(this.vehicleListMaster);
    }

    workspace = [
      {
        "appID": "UNE8783",
        "customerName": "Jane Cooper",
        "carSelection": "T280",
        "financing": "$271,840",
        "status": "Prospect"
      },
      {
        "appID": "UNE8512",
        "customerName": "Floyd Miles",
        "carSelection": "W900",
        "financing": "$284,640",
        "status": "Pending"
      }
    ]

  getVehicleList(): string[] {
    this.vehicleList = this.vehicleDetails.map(x => x.name);
    return this.vehicleList;
  }

  setVehicleList(list: string[]): void {
    console.log('Vehcile list');
    
    this.vehicleList = list;
  } 

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  })
  //Remove decimals if value is 0
  // formatCurrency(value: number): string {
  //   const formattedValue = this.formatter.format(value);

  //   const numericValue = Number(formattedValue.replace(/[^0-9.-]+/g, ''));

  //   if (numericValue % 1 === 0) {
  //     return numericValue.toFixed(0);
  //   } else {
  //     return formattedValue;
  //   }
  // }

  getVehicleListMaster(): any[] {
    return this.vehicleDetails;
  }

  getWorkspace(){
    this.workspaceList = this.workspace;
    return this.workspaceList;  
  }
  
  setRowData(data: any[]): void {
    this.rowDataSubject.next(data);
  }

  getRowData(): Observable<any[]> {
    return this.rowData$;
  }

  getWorkspaceData(){
    return this.rowData$;
  }

  vehicleDetails = [
    {
      name: '2024 LoneStar',
      imgUrl: '../assets/NaviStar/2024-Lonestar/2024-loanstar-homepage-card.png',
      price: this.formatter.format(180822),
      engineType:	'CUMMINS X15',
      maxPower:	'MAX HP 605' ,
      maxTorque:	'2,050lb',
      GVWR:	'60.6K',
      style: [{'border-radius': `50%`}],
      select_variant: ['73" Hi-Rise Sleeper', '73" Sky-Rise Sleeper', '56" Low-Roof Sleeper','56" Hi-Rise Sleeper'],
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      }
    },
    {
      name: '2024 RH613',
      imgUrl: '../assets/NaviStar/2024-RH613/2024-RH613-homepage-card .png',
      price: this.formatter.format(180822),
      engineType:	'Int. A26',
      maxPower:	'MAX HP 515' ,
      maxTorque:	'1,850lb',
      GVWR:	'60K',
      select_variant: ['56" Low-Roof Sleeper', '56" Hi-Rise Sleeper'],
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
      },
    },
    {
      name: '2024 CV515',
      imgUrl: '../assets/NaviStar/2023-CV515/2023-CV515-homepage-card.png',
      price: this.formatter.format(180822),
      engineType:	'Intl. 6.6',
      maxPower:	'MAX HP 350' ,
      maxTorque:	'700lb',
      GVWR:	'19.5K',
      select_variant: ['73" Hi-Rise Sleeper', '73" Sky-Rise Sleeper', '56" Low-Roof Sleeper','56" Hi-Rise Sleeper'],
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
    },
    {
      name: '2024 MV607',
      imgUrl: '../assets/NaviStar/2024-MV607/2024-MV607-homepage-card.png',
      price: this.formatter.format(180822),
      engineType:	'CUMMINS L9',
      maxPower:	'MAX HP 360' ,
      maxTorque:	'1,150lb',
      GVWR:	'54.6K',
      select_variant: ['73" Hi-Rise Sleeper', '73" Sky-Rise Sleeper', '56" Low-Roof Sleeper','56" Hi-Rise Sleeper'],
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
    },
    {
      name: '2024 HV513',
      imgUrl: '../assets/NaviStar/2024-HV513/2024-HV513-homepage-card.png',
      price: this.formatter.format(180822),
      engineType:	'Intl. A26',
      maxPower:	'MAX HP 515' ,
      maxTorque:	'1,850lb',
      GVWR:	'60K',
      select_variant: ['73" Hi-Rise Sleeper', '73" Sky-Rise Sleeper', '56" Low-Roof Sleeper','56" Hi-Rise Sleeper'],
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
    },
    {
      name: '2024 HX620',
      imgUrl: '../assets/NaviStar/2024-HX620/2024-HX620-homepage-card.png',
      price: this.formatter.format(180822),
      engineType:	'CUMMINS X15',
      maxPower:	'MAX HP 605' ,
      maxTorque:	'2,050lb',
      GVWR:	'74K',
      select_variant: ['73" Hi-Rise Sleeper', '73" Sky-Rise Sleeper', '56" Low-Roof Sleeper','56" Hi-Rise Sleeper'],
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
    }
  ]
}
