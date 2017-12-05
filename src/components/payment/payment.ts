import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PAYMENT_PAGE } from '../../pages/pages.constants';
import { PaymentOption } from '../../model/payment';
import { PaymentProvider } from '../../providers/payment/payment';
import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'payment',
  templateUrl: 'payment.html'
})
export class PaymentComponent {
  @Input() amount: number = 0;
  @Input() options: PaymentOption; // { amount: 0, ordertype: 'package' }; //{ amount: number, coupon: string, coin: number, type: string, biz: any };
  @Output() fulfill: EventEmitter < any > = new EventEmitter();
  @Input() min: number=0;
  @Input() disabled: boolean;
  processing: boolean;
  orderCode: string;
  constructor(
    private navCtrl: NavController,
    private paymentPro: PaymentProvider,
    private nativePro: NativeProvider
  ) {
    console.log('Hello PaymentComponent Component');
  }

  /**
   *确认下单
   */
  order() {
    if (this.processing) return;
    this.processing = true;
    if (this.amount > 0) {
      this.orderCode ? this.toPayment() :
        this.paymentPro.code(this.options).then(res => {
          if (!res || !res.ordercode) return this.catchError(res);
          this.orderCode = res.ordercode;
          this.toPayment();
          console.log(res);
        }).catch(ex => this.catchError(ex))

    } else {
      this.paymentPro.sa(this.options).then(res => {
        this.paymentPro.achieve({ len: this.navCtrl.length(), result: res, type: this.options.ordertype });
        this.nativePro.toast('开通成功');
        this.processing = false;
      }).catch(ex => this.catchError(ex));
    }
  }
  catchError(res ? ) {
    console.error(res);
    this.processing = false;
    this.nativePro.toast(res.message || '订单生成失败，请稍后再试');
  }

  toPayment() {

    this.navCtrl.push(PAYMENT_PAGE, {
      params: { ordertype: this.options.ordertype, ordercode: this.orderCode },
      amount: this.amount,
    }).then(() => this.processing = false);
  }

}
