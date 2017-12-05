import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { Subject } from 'rxjs/Subject';
import { Elost } from '../../model/elost';
//import { Storage } from '@ionic/storage';

/*
  import { Http } from '@angular/http';
  Generated class for the LostProvider provider.
  Add by leo zhang 201710010101
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LostProvider {

  private setElostSource: Subject < Elost > = new Subject < Elost > ();
  setElost$ = this.setElostSource.asObservable();

  constructor(public http: HttpProvider) {
    console.log('Hello LostProvider Provider');
  }

  setElost(obj: Elost) {
    this.setElostSource.next(obj);
  }

  subjects() {
    return this.http.get('errorbook/subjects');
  }

  exams(data) {
    return this.http.get('errorbook/subjectexams', data);
  }
  downlink(data) {
    return this.http.get('errorbook/extractcode', data);
  }
  lastOrder() {
    return this.http.get('errorbook/lastorder');
  }

  eorders(data ? ) {
    return this.http.get('errorbook/orderelec', data);
  }

  orders(data ? ) {
    return this.http.get('errorbook/order', data);
  }
  order(data ? ) {
    return this.http.get('errorbook/orderinfo', data);
  }



  /**
   *获取价格
   */
  price(data): Promise < any > {
    return new Promise((resolve: any) => setTimeout(() => resolve({ money: 30, promote: 7 }), 1800));
  }

  /**
   *费用信息
   */
  fee() {
    return this.http.post('payment/getMailPrice');
  }


}
