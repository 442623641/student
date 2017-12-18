import { Component, ViewChild } from '@angular/core';
// import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { HomeProvider } from "../../providers/home";
import { UserProvider } from '../../providers/user';
import { NativeProvider } from '../../providers/native';
import { PaymentProvider } from '../../providers/payment/payment';
import { Package } from '../../model/package';
import { UserInfo } from '../../model/userInfo';
import {
  RECHARGE_PAGE,
  PERSONAL_PAGE,
  EXAMS_PAGE,
  ENALYZING_PAGE,
  EXCELLENT_PAGE,
  ELOSTGUIDE_PAGE,
  CLAIM_PAGE,
  PACKAGEGUIDE_PAGE,
  PACKAGE_PAGE,
  LOSTGUIDE_PAGE,
} from '../pages.constants';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  pages: any = {
    package: PACKAGE_PAGE,
    packageguide: PACKAGEGUIDE_PAGE,
    recharge: RECHARGE_PAGE,
    personal: PERSONAL_PAGE,
    exams: EXAMS_PAGE,
    enalyzing: ENALYZING_PAGE,
    excellent: EXCELLENT_PAGE,
    elost: ELOSTGUIDE_PAGE,
    lost: LOSTGUIDE_PAGE,
    claim: CLAIM_PAGE
  }
  @ViewChild('ball') ballEl: any;
  /*
  学情套餐信息
  */
  private package: Package = { open: false, expires: '2016-12-31', type: 0, days: 0 };

  /*
  我的信息
  */
  private userInfo: UserInfo = {};
  listen: any;
  packageSub: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private homeProvider: HomeProvider,
    private userProvider: UserProvider,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
    private nativePro: NativeProvider,
  ) {}
  ionViewDidLoad() {

    this.userProvider.getUserInfo().then((userInfo: UserInfo) => {
      this.userInfo = userInfo;
      console.log(this.userInfo);
    });
    this.userProvider.userInfo$.subscribe((userInfo: UserInfo) => this.userInfo = userInfo);
    this.loadData();
  }

  doRefresh(event) {
    Promise.all([this.loadData(), this.paymentPro.balance()])
      .then(res => {
        event.complete();
      }).catch(ex => {
        event.complete();
        this.package = null;
      })
  }

  loadData() {
    return this.homeProvider.index().then(res => {
      this.packageSub && this.packageSub.unsubscribe();
      this.package = new Package(res.package);
      if (!this.package.open) {
        this.packageSub = this.paymentPro.package$.subscribe(res => this.loadData());
      }
    }).catch(ex => {
      console.log(ex);
      this.package = null;
      return Promise.resolve();
    });
  }

  open(should) {
    this.navCtrl.push(this.package.open ? PACKAGE_PAGE : PACKAGEGUIDE_PAGE);
    this.packageSub && this.packageSub.unsubscribe();
    this.listen = this.paymentPro.achieve$.subscribe(res => {
      let start = this.navCtrl.indexOf(this.viewCtrl);
      setTimeout(() =>
        this.navCtrl.remove(start + 1, res.len - start - 1).then(() => {
          this.listen.unsubscribe();
          this.nativePro.showLoading();
          this.loadData().then(() => this.nativePro.hideLoading());
        }), 450);
    });
  }

  ionViewDidEnter() {
    this.listen && this.listen.unsubscribe();
    this.packageSub = this.packageSub ? this.paymentPro.package$.subscribe(res => this.loadData()) : this.packageSub;
  }

}
