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
    this.amount = navParams.get('amount');
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
      // console.log(order);
      this.paymentPro[this.payType](order).then(res => {
        this.processing = undefined;
        this.nativePro.success('支付成功').then(() => {
          this.paymentPro.achieve({ len: this.navCtrl.length(), result: res, type: this.params.ordertype, amount: this.amount })
        })
        //this.success('支付成功', res), 500);
        //setTimeout(() => this.paymentPro.achieve({ len: this.navCtrl.length(), result: res, type: this.params.ordertype, amount: this.amount }), 1000);
      }, error => this.error('支付失败', error));
    }).catch(ex => this.error('支付失败', ex));
  }
  // success(msg: string, res ? ) {
  //   this.nativePro.success(msg);
  //   this.processing = false;
  // }

  error(msg: string, res ? ) {
    console.error(res)
    this.nativePro.alert(msg);
    this.processing = false;
  }

}
