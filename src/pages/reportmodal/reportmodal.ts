import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { PaymentProvider } from '../../providers/payment/payment';
import { NativeProvider } from '../../providers/native';
import { CouponProvider } from '../../providers/coupon/coupon';
import { RECHARGE_PAGE, PACKAGE_PAGE } from '../pages.constants';
/**
 * Generated class for the ReportmodalPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-reportmodal',
  templateUrl: 'reportmodal.html',
})
export class ReportmodalPage {
  COIN = 100;
  comment: string;
  guid: string;
  enough: boolean;
  balance: number;
  couponCount: number = 0;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private userPro: UserProvider,
    private paymentPro: PaymentProvider,
    private nativePro: NativeProvider,
    private couponPro: CouponProvider
  ) {}
  balanceChange(event) {
    this.guid = this.navParams.get('guid');
    this.balance = event;
    this.enough = event > this.COIN;
    this.comment = this.enough ?
      `消耗<span>${this.COIN}</span>学贝` :
      `<span>${this.COIN}</span>学贝，还需充值<span>${this.COIN-event}</span>学贝`;
  }

  ngOnInit() {
    this.couponPro.getcount().then(res => this.couponCount = res.count || 0).catch();
  }

  onTap() {
    this.couponCount ? this.viewCtrl.dismiss({ page: PACKAGE_PAGE }) :
      this.enough ? this.paymentPro.sa({ ordertype: 'exam', examguid: this.guid })
      .then(res => {
        this.nativePro.toast("成功生成本次学情报告");
        this.viewCtrl.dismiss({ payment: true });
      }) :
      this.viewCtrl.dismiss({ page: RECHARGE_PAGE, dvalue: this.COIN - this.balance });
  }
}
