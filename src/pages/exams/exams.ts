import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Pageview } from '../../model/pageview';
import { ExamsProvider } from '../../providers/exams/exams';
import { ChartsProvider } from '../../providers/charts/charts';
import { PaymentProvider } from '../../providers/payment/payment';
import { NativeProvider } from '../../providers/native';
import { REPORT_PAGE, DOCTOR_PAGE, REPLY_PAGE } from '../pages.constants';
/**
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exams',
  templateUrl: 'exams.html',
})
export class ExamsPage {
  pages: any = {
    report: REPORT_PAGE,
    doctor: DOCTOR_PAGE,
    reply: REPLY_PAGE,
  }
  view: Pageview;
  latest: any;
  exams: any[] = [];
  total: number;
  waterball: any;
  option: any;
  achieveSub: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public examsPro: ExamsProvider,
    public chartsPro: ChartsProvider,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
    private nativePro: NativeProvider
  ) {}

  ionViewDidLoad() {
    //this.doRefresh();
    setTimeout(() => this.doRefresh(), 300);
  }

  doRefresh(event ? ) {

    this.view = new Pageview({ viewindex: 1, viewlength: 10 });
    let error = (res) => {
      console.error(res);
      this.latest = null;
      event ? event.complete() : this.nativePro.hideLoading();
    }

    this.examsPro.exams(this.view).then(res => {
      if (!res || !res.latest) return error(res);
      this.latest = res.latest;
      this.total = res.total;
      this.waterball = this.chartsPro.ball(this.latest.percent, this.latest.score);
      this.exams = res.exams;
      event && event.complete();
    }).catch(ex => error(ex));
  }

  doInfinite(event) {
    this.view.viewindex++;
    this.examsPro.exams(this.view).then(res => {
      event.complete();
      this.exams = this.exams.concat(res);
      //console.log(res);
    }).catch(ex => {
      console.error(ex);
      event.complete();
    })
  }

  toReply(item) {
    this.navCtrl.push(this.pages.reply, item).then((res) => {
      this.achieveSub = this.paymentPro.achieve$.subscribe(res => {
        item.payment = true;
        let start = this.navCtrl.indexOf(this.viewCtrl);
        this.navCtrl.insert(start + 1, this.pages.doctor, item, { animate: false }).then(() => {
          this.navCtrl.remove(start + 2, res.len - start - 1).then(() => {
            this.achieveSub.unsubscribe();
            this.nativePro.showLoading();
            this.doRefresh();
          });
        });
      });
    });
  }
  ionViewDidEnter() {
    this.achieveSub && this.achieveSub.unsubscribe();
  }
}
