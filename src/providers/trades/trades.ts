import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
//import { CouPon } from '../../model/coupon';

@Injectable()
export class TradesProvider {
  constructor(public http: HttpProvider) {}


  orders(page: any) {
    return this.http.get("userinfo/consume", page);
  }

}
