import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { CouPon } from '../../model/coupon';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CouponProvider {
  private checkedSource = new Subject < any > ();
  checked$ = this.checkedSource.asObservable();
  constructor(
    public http: HttpProvider,
    private storage: Storage
  ) {
    console.log('Hello ExamsProvider Provider');
  }

  /**
   * 发布选择事件
   */
  checked(val ? : any) {
    this.checkedSource.next(val);
  }





  //获取有效优惠券数量
  getcount() {
    return this.http.get('coupon/unexpiredCount');
  }

  //获取优惠券列表
  getlist(page: CouPon) {
    return this.http.get('coupon/coupons', page);
  }
  //根据优惠券编码获取优惠券
  wincoupon(data) {
    return this.http.get('coupon/receivecoupon', data, true);
  }
}
