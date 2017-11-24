import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { UserInfo } from '../../model/userInfo';
import {
  PERSONAL_PAGE,
  FEEDBACK_PAGE,
  SETUP_PAGE,
  PASSWORD_PAGE,
  VALIDATION_PAGE,
  TRADE_PAGE,
  COUPON_PAGE,
  RECHARGE_PAGE,
  ORDERMORE_PAGE,
} from '../pages.constants';
//Icon.enableColorful();
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
    trade: TRADE_PAGE,
    recharge: RECHARGE_PAGE,
    coupon: COUPON_PAGE,
    order: ORDERMORE_PAGE,
  };
  userInfo: UserInfo = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userPro: UserProvider
  ) {
    console.log('UsercenterPage');
  }
  ngAfterViewInit() {
    this.userPro.getUserInfo().subscribe(res => this.userInfo = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsercenterPage');
  }

  go(page: any) {
    this.navCtrl.push(page);
  }

  get desc() {
    let grade = this.userInfo.gradeName ? `【${this.userInfo.gradeName} 】` : '';
    return `${this.userInfo.cityName} ${this.userInfo.school} ${grade}`;
  }


}
