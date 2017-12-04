import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { SeptnetpayProvider } from './septnetpay';
import { Storage } from '@ionic/storage';

import { PaymentParams } from '../../model/payment'
import { Subject } from 'rxjs/Subject';
import { COIN } from '../providers.constants';
/* beautify ignore:start */
declare let cordova: any;
declare let Wechat: any;
/* beautify ignore:end */
/*
  import { Http } from '@angular/http';
  Generated class for the PaymentProvider provider.
  Add by leo zhang 201710010101
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentProvider {
  private achieveSource = new Subject < any > ();
  private balanceSource = new Subject < any > ();
  private packageSource = new Subject < any > ();
  achieve$ = this.achieveSource.asObservable();
  balance$ = this.balanceSource.asObservable();
  package$ = this.packageSource.asObservable();

  constructor(
    private http: HttpProvider,
    private septnetpayPro: SeptnetpayProvider,
    private storage: Storage,
  ) {
    console.log('Hello PaymentProvider Provider');
  }

  achieve(obj) {
    this.achieveSource.next(obj);
    this.balance();
    obj.type == "package" && this.packageSource.next(obj);
  }

  code(data) {
    return this.http.post('payment/getOrderCode', data);
  }

  params(data) {

    return this.http.post('payment/getOrderSign', data);

  }



  balance() {
    return this.http.get('userinfo/getcoin').then(res => {
      res = res || {}
      this.setLocalBalance(res.coin || 0);
      return res.coin || 0;
    }).catch();
  }

  setLocalBalance(num, delay = 0) {
    setTimeout(() => this.balanceSource.next(num), delay);
    return this.storage.set(COIN, num);
  }
  getLocalBalance() {
    return this.storage.get(COIN);
  }
  private queryString(obj) {
    let dic = [];
    for (var key in obj) dic.push(key + '=' + encodeURIComponent(obj[key]));
    return dic.join('&');
  }

  /**
   *支付宝支付
   */
  za(obj): Promise < any > {
    if (this.http.isNative) {
      return new Promise((resolve, reject) => {
        cordova.plugins.alipay.payment(this.queryString(obj),
          function success(e) {
            console.log('alipay success:' + JSON.stringify(e));
            resolve(e);
          },
          function error(e) {
            console.log('alipay fail:' + JSON.stringify(e));
            reject(e);
          });
      })
    } else {
      console.log('alipay fail:找不到应用');
      return Promise.reject({ message: '找不到应用' });
    }
  }

  /**
   *微信支付
   */
  wa(obj): Promise < any > {
    if (typeof Wechat === 'undefined') {
      console.log('wepay fail:Wechat cordova plugin is not installed.');
      return Promise.reject('Wechat cordova plugin is not installed.');
    }
    if (this.http.isNative) {
      return new Promise((resolve, reject) => {
        Wechat.sendPaymentRequest(obj,
          function success(e) {
            console.log('wepay success:' + JSON.stringify(e));
            resolve(e);
          },
          function error(e) {
            console.log('wepay fail:' + JSON.stringify(e));
            reject(e);
          });
      })
    } else {
      console.log('wepay fail:找不到应用');
      return Promise.reject({ message: '找不到应用' });
    }
  }

  /**
   *七天支付
   */
  sa(params: PaymentParams) {
    switch (params.ordertype) {
      case "package":
        return this.septnetpayPro.package({ couponcode: params.couponcode, year: params.year });
      case "exam":
        return this.septnetpayPro.exam({ examguid: params.examguid });
      case "elecerrorbook":
        return this.septnetpayPro.lost({ product: params.product, couponcode: params.couponcode, examguids: JSON.stringify(params.examguids) });
      default:
        console.log('Invalid order type');
        return Promise.reject({ status: 405, message: 'Invalid order type' });
    }
  }

}
