import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { UserInfo } from '../../model/userInfo';
import { PaymentProvider } from '../../providers/payment/payment';
import {
  PERSONAL_PAGE,
  FEEDBACK_PAGE,
  SETUP_PAGE,
  PASSWORD_PAGE,
  TRADES_PAGE,
  COUPON_PAGE,
  RECHARGE_PAGE,
  ORDERMORE_PAGE,
} from '../pages.constants';

/**
 * Generated class for the UsercenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usercenter',
  templateUrl: 'usercenter.html',
})
export class UsercenterPage {
  pages: any = {
    personal: PERSONAL_PAGE,
    feedback: FEEDBACK_PAGE,
    setup: SETUP_PAGE,
    password: PASSWORD_PAGE,
    trades: TRADES_PAGE,
    recharge: RECHARGE_PAGE,
    coupon: COUPON_PAGE,
    order: ORDERMORE_PAGE,
  };
  userInfo: UserInfo = {};
  rechargeSub: any;

  constructor(
    private navCtrl: NavController,
    private userPro: UserProvider,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
  ) {
    console.log('UsercenterPage');
  }
  ionViewDidLoad() {
    this.userPro.getUserInfo().then(res => this.userInfo = res);
    this.userPro.userInfo$.subscribe((userInfo: UserInfo) => this.userInfo = userInfo);
  }
  doRefresh(event) {
    this.paymentPro.balance()
      .then(res => event.complete())
      .catch(ex => event.complete())
  }
  recharge() {
    this.navCtrl.push(this.pages.recharge, { params: { ordertype: 'coin' } });
    this.rechargeSub = this.paymentPro.achieve$.subscribe(res => {
      let start = this.navCtrl.indexOf(this.viewCtrl);
      this.navCtrl.remove(start + 1, res.len - start - 1);
    });
  }
  ionViewDidEnter() {
    this.rechargeSub && this.rechargeSub.unsubscribe();
  }

  get desc() {
    let grade = this.userInfo.gradeName ? `【${this.userInfo.gradeName}】` : '';
    return `${this.userInfo.cityName} ${this.userInfo.school}${grade}`;
  }


}
