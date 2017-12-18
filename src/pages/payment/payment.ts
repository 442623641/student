import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AGREEMENT_PAGE } from '../pages.constants';
import { PaymentProvider } from '../../providers/payment/payment';
import { PaymentOption } from '../../model/payment';
import { NativeProvider } from '../../providers/native';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  pages: any = {
    agreement: AGREEMENT_PAGE
  }
  checked: boolean = true;
  params: PaymentOption;
  amount: any;
  processing: boolean = false;
  payType: string = 'za';
  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public paymentPro: PaymentProvider,
    private nativePro: NativeProvider
  ) {
    this.params = navParams.get('params');
    this.amount = (navParams.get('amount') / 10).toFixed(2);
  }

  checkChange(event) {
    if (event) {
      if (this.processing === undefined) this.processing = false;
    } else {
      if (this.processing === false) this.processing = undefined;
    }
  }

  pay() {
    this.paymentPro.params(Object.assign({ paytype: this.payType }, this.params)).then(order => {
      console.log(order);
      this.paymentPro[this.payType](order).then(res => {
        this.callback('支付成功', res);
        this.paymentPro.achieve({ len: this.navCtrl.length(), result: res, type: this.params.ordertype });
      }, error => {
        //this.paymentPro.achieve({ len: this.navCtrl.length(), result: res });
        this.callback('支付失败', error);
        //this.paymentPro.achieve({ len: this.navCtrl.length(), type: this.params.ordertype });
        //console.log(this.payType + ' fail:' + res);
      });
      //get pay params from server side with sign.
      //const alipayOrder: AlipayOrder = {};
    }).catch(ex => this.callback('支付失败', ex));
  }
  callback(msg: string, res ? ) {
    console.log(res);
    this.nativePro.prompt(msg);
    this.processing = false;
  }
}
