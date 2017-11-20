import { Component, NgZone, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { SetupPage } from '../setup/setup';
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
  RECHARGE_PAGE
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
    password: VALIDATION_PAGE,
    trade: TRADE_PAGE,
    recharge: RECHARGE_PAGE,
    coupon: COUPON_PAGE,

  }

  userInfo: UserInfo = {};

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private userPro: UserProvider,
    private zone: NgZone,
    private renderer: Renderer
  ) {
    console.log('UsercenterPage');
  }
  ngAfterViewInit() {
    this.userPro.getUserInfo().then(res => this.userInfo = res);
    //this.toolbarBackground = document.querySelector('page-usercenter .header .toolbar-background');
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
