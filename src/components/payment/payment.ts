import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PAYMENT_PAGE } from '../../pages/pages.constants';
import { PaymentOption } from '../../model/payment';
import { PaymentProvider } from '../../providers/payment/payment';
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
  processing: boolean;
  constructor(
    private navCtrl: NavController,
    private paymentPro: PaymentProvider) {
    console.log('Hello PaymentComponent Component');
  }

  // ngAfterViewInit() {
 //   this.paymentPro.achieve$.subscribe(res => {
 //     debugger;
 //     this.navCtrl.pop();
 //   });
 // }



  /**
   *确认下单
   */
  order() {
    if (this.processing) return;
    if (this.amount) {
      if (this.options.examguids) this.options.examguids = JSON.stringify(this.options.examguids);
      this.navCtrl.push(PAYMENT_PAGE, {
        params: this.options,
        amount: this.amount
      });
    } else {
      this.processing = true;
      this.paymentPro.sa(this.options).then(res => {
        this.fulfill.next(res);
        this.processing = false;
      }).catch((ex) => {
        this.fulfill.next(ex);
        this.processing = false;
      });
    }
  }

}
