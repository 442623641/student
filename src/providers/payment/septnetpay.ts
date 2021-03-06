import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { LostParams } from '../../model/elost'

/*
  import { Http } from '@angular/http';
  Generated class for the PaymentProvider provider.
  Add by leo zhang 201710010101
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SeptnetpayProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello SeptnetpayProvider Provider');

  }

  /**
   *支付套餐
   */
  package(params: { year: number, couponcode ? : string }) {
    let api = params.couponcode ? 'openpackgebycoupon' : 'openpackgebyxbz';
    return this.http.post('freepayment/' + api, params);
  }

  /**
   *支付电子错题本
   */
  elost(params: { examguids: string, product: 0 | 1, couponcode ? : string }) {
    let api = params.couponcode ? 'buyelecerrobookbycoupon' : 'buyelecerrobookbyxbz';
    return this.http.post('freepayment/' + api, params);
  }
  /**
   *支付错题本
   */
  lost(params: LostParams) {
    return this.http.post('freepayment/buyerrobookbycoupon', params);
  }

  /**
   *支付单次考试
   */
  exam(params: { examguid: string }) {
    return this.http.post('freepayment/buyexam', params);
  }

}
