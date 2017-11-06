import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import 'rxjs/add/operator/map';
import { CouPon } from '../../model/coupon';

@Injectable()
export class TradeProvider {
  constructor(public http: HttpProvider) {}


  orderinfo(page: CouPon) {
    return this.http.get("userinfo/consume",page);
  }

}
