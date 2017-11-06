import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { CouPon } from '../../model/coupon';
import 'rxjs/add/operator/map';
@Injectable()
export class CouponProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello ExamsProvider Provider');
  }
  //获取有效优惠券数量
  getcount(){
    return this.http.get('coupon/unexpiredCount');
  }
  //获取优惠券列表
  getlist(page: CouPon){
    return this.http.get('coupon/coupons',page);
  }
  //根据优惠券编码获取优惠券
  wincoupon(data){
    return this.http.get('coupon/receivecoupon',data,true);
  }
}
