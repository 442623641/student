import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RECHARGE_PAGE, PERSONAL_PAGE, EXAMS_PAGE, ENALYZING_PAGE, EXCELLENT_PAGE, LOST_PAGE } from '../pages.constants';
import { HomeProvider } from "../../providers/home";
import { UserProvider } from '../../providers/user';
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
    recharge: RECHARGE_PAGE,
    personal: PERSONAL_PAGE,
    exams: EXAMS_PAGE,
    enalyzing: ENALYZING_PAGE,
    excellent: EXCELLENT_PAGE,
    lost: LOST_PAGE,
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private homeProvider: HomeProvider,
    private userProvider: UserProvider,
    private staticPro: StaticProvider) {}
  ngAfterViewInit() {
    this.userProvider.getUserInfo().then((userInfo: UserInfo) => {
      this.userInfo = userInfo;
      console.log(this.userInfo);
    });
    this.homeProvider.index().then(res => {

      this.package = res.package;
      this.homeProvider.setBadge(res.msgCount);
      console.log(res);

    }).catch(ex => {
      this.package = null;
    });
  }

}
