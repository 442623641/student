import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { SeptnetpayProvider } from './septnetpay';
import 'rxjs/add/operator/map';
import { PaymentParams } from '../../model/payment'
import { Subject } from 'rxjs/Subject';
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
  achieve$ = this.achieveSource.asObservable();


  constructor(
    private http: HttpProvider,
    private septnetpayPro: SeptnetpayProvider
  ) {
    console.log('Hello PaymentProvider Provider');
  }

  achieve(obj) {
    this.achieveSource.next(obj);
  }

  code(data) {

    return this.http.post('payment/getOrderCode', data);

  }

  params(data) {

    return this.http.post('payment/getOrderSign', data);

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
      Promise.reject('Wechat cordova plugin is not installed.');
      return;
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
            //console.log('exception:' + JSON.stringify(e));
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
