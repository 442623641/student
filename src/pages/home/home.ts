import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {
  RECHARGE_PAGE,
  PERSONAL_PAGE,
  EXAMS_PAGE,
  ENALYZING_PAGE,
  EXCELLENT_PAGE,
  LOST_PAGE,
  UNCLAIMEDEXAMS_PAGE,
  PACKAGE_PAGE
} from '../pages.constants';
import { HomeProvider } from "../../providers/home";
import { UserProvider } from '../../providers/user';
import { NativeProvider } from '../../providers/native';
import { PaymentProvider } from '../../providers/payment/payment';
import { StaticProvider } from '../../providers/static/static';
import { Package } from '../../model/package';
import { UserInfo } from '../../model/userInfo';


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
    recharge: RECHARGE_PAGE,
    personal: PERSONAL_PAGE,
    exams: EXAMS_PAGE,
    enalyzing: ENALYZING_PAGE,
    excellent: EXCELLENT_PAGE,
    lost: LOST_PAGE,
    unclaimed: UNCLAIMEDEXAMS_PAGE
  }
  @ViewChild('ball') ballEl: any;
  private option: any;
  private optionWaterball: any;
  private scene: any;
  private pieOption: any;
  private state: number = 0;

  /*
  学情套餐信息
  */
  private package: Package;

  /*
  我的信息
  */
  private userInfo: UserInfo;
  listen: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private homeProvider: HomeProvider,
    private userProvider: UserProvider,
    private staticPro: StaticProvider,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
    private nativePro: NativeProvider,
  ) {}
  ngAfterViewInit() {
    this.userProvider.getUserInfo().subscribe((userInfo: UserInfo) => {
      this.userInfo = userInfo;
      this.paymentPro.setLocalBalance(this.userInfo.coin);
      console.log(this.userInfo);
    });
    this.loadData();
  }

  loadData() {
    return this.homeProvider.index().then(res => {
      this.package = new Package(res.package);
      this.homeProvider.setBadge(res.msgCount);

      console.log(res);

    }).catch(ex => {
      console.log(ex);
      this.package = null;
      return Promise.resolve();
    });
  }

  open() {
    this.listen = this.paymentPro.achieve$.subscribe(res => {
      let start = this.navCtrl.indexOf(this.viewCtrl);
      this.navCtrl.remove(start + 1, res.len - start - 1).then(() => {
        this.listen.unsubscribe();
        this.nativePro.showLoading();
        this.loadData().then(() => this.nativePro.hideLoading());
      })
    });
  }

  ionViewWillEnter() {
    this.listen && this.listen.unsubscribe();
  }

}
