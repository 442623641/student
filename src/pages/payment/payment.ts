import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AGREEMENT_PAGE, HOME_PAGE } from '../pages.constants';
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
  params: PaymentOption;
  amount: number;
  orderCode: string;
  processing: boolean = false;
  payType: string = 'za';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public paymentPro: PaymentProvider,
    private nativePro: NativeProvider
  ) {
    this.params = this.navParams.get('params');
    this.amount = this.navParams.get('amount');
  }

  ngAfterViewInit() {
    this.paymentPro.code(this.params).then(res => {
      this.orderCode = res.ordercode;
      console.log(res);
    })
  }

  pay() {
    this.paymentPro.params({ ordertype: this.params.ordertype, paytype: this.payType, ordercode: this.orderCode }).then(res => {
      console.log(res);
      this.processing = false;
      this.paymentPro[this.payType](res).then(res => {
        //console.log(this.payType + ' success:' + res);
        this.nativePro.toast('支付成功');
      }, error => {
        this.paymentPro.achieve({ len: this.navCtrl.length() });
        this.nativePro.toast('支付失败');
        //console.log(this.payType + ' fail:' + res);
      });
      //get pay params from server side with sign.
      //const alipayOrder: AlipayOrder = {};

    })
  }
}
