import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TradeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TradeProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello TradeProvider Provider');
  }
  public order() {
    return this.http.get("order");
  }

}
