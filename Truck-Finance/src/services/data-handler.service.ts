import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  vehicleList: string[] = [''];
  vehicleListMaster: string[] =  [];

  constructor() { 
    this.vehicleListMaster =  this.vehicleDetails.map(x => x.name);
    this.setVehicleList(this.vehicleListMaster);
    }

  getVehicleList(): string[] {
    this.vehicleList = this.vehicleDetails.map(x => x.name);
    return this.vehicleList;
  }

  setVehicleList(list: string[]): void {
    console.log('Vehcile list');
    
    this.vehicleList = list;
  } 

  vehicleDetails = [
    {
      name: '2024 LoneStar',
      imgUrl: '../assets/NaviStar/2024-Lonestar/2024-loanstar-homepage-card.png',
      price: 180822,
      engineType:	'CUMMINS X15',
      maxPower:	'MAX HP 605' ,
      maxTorque:	'2,050 LB-FT. TORQUE',
      GVWR:	'60.6K',
    },
    {
      name: '2024 RH613',
      imgUrl: '../assets/NaviStar/2024-RH613/2024-RH613-homepage-card .png',
      price: 180822,
      engineType:	'International A26',
      maxPower:	'MAX HP 515' ,
      maxTorque:	'1,850 LB-FT. TORQUE',
      GVWR:	'60K',
    },
    {
      name: '2024 CV515',
      imgUrl: '../assets/NaviStar/2023-CV515/2023-CV515-homepage-card.png',
      price: 180822,
      engineType:	'International 6.6',
      maxPower:	'MAX HP 350' ,
      maxTorque:	'700 LB-FT. TORQUE',
      GVWR:	'19.5K',
    },
    {
      name: '2024 MV607',
      imgUrl: '../assets/NaviStar/2024-MV607/2024-MV607-homepage-card.png',
      price: 180822,
      engineType:	'CUMMINS L9',
      maxPower:	'MAX HP 360' ,
      maxTorque:	'1,150 LB-FT. TORQUE',
      GVWR:	'54.6K',
    },
    {
      name: '2024 HV513',
      imgUrl: '../assets/NaviStar/2024-HV513/2024-HV513-homepage-card.png',
      price: 180822,
      engineType:	'International A26',
      maxPower:	'MAX HP 515' ,
      maxTorque:	'1,850 LB-FT. TORQUE',
      GVWR:	'60K',
    },
    {
      name: '2024 HX620',
      imgUrl: '../assets/NaviStar/2024-HX620/2024-HX620-homepage-card.png',
      price: 180822,
      engineType:	'CUMMINS X15',
      maxPower:	'MAX HP 605' ,
      maxTorque:	'2,050 LB-FT. TORQUE',
      GVWR:	'74K',
    }
  ]
}
