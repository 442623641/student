import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { PaymentProvider } from '../../providers/payment/payment';
import { NativeProvider } from '../../providers/native';
import { RECHARGE_PAGE } from '../pages.constants';
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


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private userPro: UserProvider,
    private paymentPro: PaymentProvider,
    private nativePro: NativeProvider,
  ) {}
  balanceChange(event) {
    this.guid = this.navParams.get('guid');
    this.balance = event;
    this.enough = event > this.COIN;
    this.comment = this.enough ?
      `消耗<span>${this.COIN}</span>学贝` :
      `<span>${this.COIN}</span>学贝，还需充值<span>${this.COIN-event}</span>学贝`;
  }

  ngAfterViewInit() {}

  onTap() {
    this.enough ? this.paymentPro.sa({ ordertype: 'exam', examguid: this.guid })
      .then(res => {
        this.nativePro.toast("成功生成本次学情报告");
        this.viewCtrl.dismiss(true);
      }) : this.viewCtrl.dismiss({ open: true, dvalue: this.COIN - this.balance });
  }
}
