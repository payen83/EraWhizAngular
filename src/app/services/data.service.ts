import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: Array<any>;
  constructor() { 
    this.data = [
      { name: "Ali bin Abu", icNo: '900215095789', height: 169, gender: 'M' },
      { name: "Omar bin Osman", icNo: '890131035785', height: 179, gender: 'M' },
      { name: "Siti Aminah binti Bakar", icNo: '970131076988', height: 149, gender: 'F' },
    ];
  }

  getData(){
    return this.data;
  }

  getDataByICNo(icNo: any){
    return this.data.find((item) => (item.icNo) == (icNo));
  }

  setData(value: any){
    this.data.push(value);
  }
}
