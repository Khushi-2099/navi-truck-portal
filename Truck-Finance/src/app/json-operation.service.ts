import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonOperationService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/JSONfiles/workspace.json');
  }

  // updateData(updatedData:any): Observable<any[]> {
  //     console.log("update serveice",updatedData);
  //     return this.getData().pipe(
  //       map((data: any[]) => {
  //         // Update the data here
  //         const updatedArray = data.map(item => {
  //           if (item.appID === updatedData.appID) {
  //             return { ...item, ...updatedData };
  //           }
  //           return item;
  //         });
  //         return updatedArray;
  //       })
  //     )
  // }

  // updateData(updatedData: any): Observable<any[]> {
  //   console.log("update service", updatedData);
  //   return this.getData().pipe(
  //     map((data: any[]) => {
  //       // Update the data here
  //       const updatedArray: any[] = data.map(item => {
  //         if (item.appID === updatedData.appID) {
  //           return { ...item, ...updatedData };
  //         }
  //         return item;
  //       });
  //       return updatedArray;
  //     })
  //   );
  // }

  // updateData(updatedData: any): Observable<any[]> {
  //   console.log("update service", updatedData);
  //   return this.getData().pipe(
  //     map((data: any[]) => {
  //       // Update the data here
  //       const updatedArray: any[] = data.map(item => {
  //         if (item.appID === updatedData.appID) {
  //           return { ...item, ...updatedData };
  //         }
  //         return item;
  //       });
  //       return updatedArray;
  //     })
  //   ) as Observable<any[]>; // Ensure the correct return type
  // }

  updateData(updatedData: any): Observable<any[]> {
  return this.getData().pipe(
    map((data: any): any[] => {
      const updatedArray: any[] = data.map((item:any) => {
        if (item.appID === updatedData.appID) {
          return { ...item, ...updatedData };
        }
        return item;
      });
      return updatedArray;
    })
  );
}

pushData(updatedData: any): Observable<any[]> {
  return this.getData().pipe(
    map((data: any): any[] => {
      const updatedArray: any[] = [updatedData, ...data ];
      return updatedArray;
    })
  );
}


}
