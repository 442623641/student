import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { Elost, LostParams } from '../../model/elost';
import { LOSTOPTION_PAGE, LOSTORDERS_PAGE, LOSTPAY_PAGE } from '../pages.constants';
import { PaymentProvider } from '../../providers/payment/payment';
import { NativeProvider } from '../../providers/native';
//import { UserProvider } from '../../providers/user';
//import { UserInfo } from '../../model/userInfo';
/**
 * Generated class for the LostPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lost',
  templateUrl: 'lost.html',
})
export class LostPage {
  //userInfo: UserInfo;
  //@ViewChild('content') content: Content;
  showTips: boolean;
  /**
   *科目列表
   */
  losts: Elost[];

  /**
   *支付金额
   */
  amount: number = 0;

  /**
   *定制列表
   */
  checkeds: Elost[] = [];

  /**
   * child pages
   */
  pages = {
    lostoption: LOSTOPTION_PAGE,
    lostOrders: LOSTORDERS_PAGE,
    lostpay: LOSTPAY_PAGE,
  }

  setElostSub: any;
  replaceElostSub: any;
  achieveSub: any;
  //baseAmount: number = 0;
  //expressAmount: number = 10;
  payDisabled: boolean;
  constructor(
    private navCtrl: NavController,
    private lostPro: LostProvider,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
    private nativePro: NativeProvider,
    //userPro: UserProvider

  ) {
    //userPro.getUserInfo().then(res => this.userInfo = res);
  }

  ionViewDidLoad() {
    setTimeout(() => this.doRefresh(), 300);
  }

  print(item) {
    this.navCtrl.push(this.pages.lostoption, item).then(() => {
      this.replaceElostSub = this.lostPro.replaceElost$.subscribe((res: Elost) => {
        this.setLost(res);
      });
      this.setElostSub = this.lostPro.setElost$.subscribe((res: Elost) => {
        this.price(this.setLost(res));
      })
    });
  }

  /**
   *重置科目
   */
  private setLost(res: Elost) {
    let index = this.losts.findIndex(item => {
      return item.name == res.name
    });
    if (!this.losts[index]) return;
    this.losts[index] = res;
    this.checkeds = this.losts.filter(item => { return item['visible'] = !!item.echeckeds; });
    return this.losts[index];
  }

  /**
   *计算价格
   */
  private price(lost: Elost) {
    if (!lost.icheckeds) return this.calcAmount();
    this.payDisabled = lost.processing = true;

    let exception = (ex) => {
      this.payDisabled = lost.processing = lost.checkedAll = false;
      this.setLost(lost);
      this.calcAmount();
      this.nativePro.toast(ex.message || '网络延时，请稍后再试');
    }

    let checkExams = [];
    lost.exams.forEach(exam => {
      exam.checked && checkExams.push({ guid: exam.guid, studentCode: exam.studentcode });
    });

    this.lostPro.price({
      km: lost.name,
      exams: checkExams,
      promote: lost.isPromote
    }).then(res => {

      if (!res.money) return exception(res);
      this.payDisabled = false;
      lost = Object.assign(lost, res, { processing: false })
      //lost.money += this.baseAmount;
      this.calcAmount();
    }).catch(ex => exception(ex));
  }

  /**
   *统计总价
   */
  private calcAmount() {
    this.amount = 0;
    this.checkeds.forEach((item) => this.amount += item.money)
  }

  doRefresh(event ? ) {
    this.checkeds.length = 0;
    this.lostPro.subjects().then(res => {
      event && event.complete();
      if (!res || !res.length) {
        this.losts = null;
        return;
      }
      this.losts = res.map(item => { item.type = 0; return new Elost(item) });
    }).catch(e => this.losts = null);
  }


  get checkedsCount() {
    return this.checkeds.filter(item => { return item.echeckeds }).length;
  }

  /**
   *去支付
   */
  dopay() {
    let subjects = [];
    this.checkeds.forEach(item => item.echeckeds && subjects.push({ name: item.name, exams: item.exams.filter(i => { return i.checked; }) }))
    this.navCtrl.push(this.pages.lostpay, { params: new LostParams(this.checkeds, this.amount) });
    this.achieveSub = this.paymentPro.achieve$.subscribe(res => {
      let start = this.navCtrl.indexOf(this.viewCtrl);
      this.navCtrl.insert(start + 1, this.pages.lostOrders, {}, { animate: false }).then(() => {
        this.navCtrl.remove(start + 2, res.len - start - 1).then(() => {
          this.doRefresh();
          this.achieveSub.unsubscribe();
        });
      });
    });
  }

  ionViewDidEnter() {
    this.achieveSub && this.achieveSub.unsubscribe();
    this.setElostSub && this.setElostSub.unsubscribe();
    this.replaceElostSub && this.replaceElostSub.unsubscribe();
  }

  ngOnDestroy() {
    this.ionViewDidEnter();
  }
}
