import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { Elost } from '../../model/elost';
import { LOSTOPTION_PAGE, LOSTORDER_PAGE, LOSTPAY_PAGE } from '../pages.constants';
import { PaymentProvider } from '../../providers/payment/payment';
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
  pages: any = {
    lostoption: LOSTOPTION_PAGE,
    lostOrder: LOSTORDER_PAGE,
    lostpay: LOSTPAY_PAGE,
  }

  setElostSub: any;
  achieveSub: any;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private lostPro: LostProvider,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
  ) {}

  ngAfterViewInit() {
    this.doRefresh();
  }

  print(item) {
    this.navCtrl.push(this.pages.lostoption, item).then(() => {
      this.setElostSub = this.lostPro.setElost$.subscribe((res: Elost) => {
        this.setElostSub.unsubscribe();
        console.log('setElost$');
        this.showTips = false;
        //if (!this.losts.length) return;
        let index = this.losts.findIndex(item => {
          return item.name == res.name
        });
        this.losts[index] = res;
        this.losts[index].count = res.count;
        this.checkeds = this.losts.filter(item => { return item.echeckeds });
        this.checkeds.map(item => { return item.visible = true });
        console.log(this.losts[index]);
      });
    });
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
      console.log(res);
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
    this.navCtrl.push(this.pages.lostpay, { subjects: subjects });
    this.achieveSub = this.paymentPro.achieve$.subscribe(res => {
      let start = this.navCtrl.indexOf(this.viewCtrl);
      this.navCtrl.insert(start + 1, this.pages.lostOrder, {}, { animate: false }).then(() => {
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
