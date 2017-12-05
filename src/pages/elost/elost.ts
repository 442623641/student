import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { Elost } from '../../model/elost';
import { LOSTOPTION_PAGE, ELOSTORDERS_PAGE, ELOSTPAY_PAGE } from '../pages.constants';
import { PaymentProvider } from '../../providers/payment/payment';
/**
 * Generated class for the LostPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-elost',
  templateUrl: 'elost.html',
})
export class ElostPage {
  //@ViewChild('content') content: Content;
  showTips: boolean;
  /**
   *科目列表
   */
  losts: Elost[];

  /**
   *定制列表
   */
  checkeds: Elost[] = [];

  /**
   * child pages
   */
  pages = {
    lostoption: LOSTOPTION_PAGE,
    lostOrders: ELOSTORDERS_PAGE,
    lostpay: ELOSTPAY_PAGE,
  }

  setElostSub: any;
  achieveSub: any;
  constructor(
    private navCtrl: NavController,
    // private navParams: NavParams,
    private lostPro: LostProvider,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
  ) {}

  ionViewDidLoad() {
    setTimeout(() => this.doRefresh(), 300);
  }

  print(item) {
    this.navCtrl.push(this.pages.lostoption, item).then(() => {
      this.setElostSub = this.lostPro.setElost$.subscribe((res: Elost) => {
        this.setElostSub.unsubscribe();
        //console.log('setElost$');
        this.showTips = false;
        this.setLost(res);
      });
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

  doRefresh(event ? ) {
    this.checkeds.length = 0;
    this.lostPro.subjects().then(res => {
      event && event.complete();
      if (!res || !res.length) {
        this.losts = null;
        return;
      }
      this.losts = res.map(item => { return new Elost(item) });
      //console.log(res);
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
    this.navCtrl.push(this.pages.lostpay, { params: subjects });
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
    //this.setElostSub && this.setElostSub.unsubscribe();
  }

  ngOnDestroy() {
    this.achieveSub && this.achieveSub.unsubscribe();
    this.setElostSub && this.setElostSub.unsubscribe();
  }
}
