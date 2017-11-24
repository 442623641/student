import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, ModalController, ViewController } from 'ionic-angular';
import { ExamsProvider } from '../../providers/exams/exams';
import { ChartsProvider } from '../../providers/charts/charts';
import { PaymentProvider } from '../../providers/payment/payment';
import { ReportOptions, ReportCategory } from '../../model/report';

import { DOCTOR_PAGE, PACKAGE_PAGE, RECHARGE_PAGE } from '../pages.constants';

import { NativeProvider } from '../../providers/native';
import { ReportmodalPage } from '../reportmodal/reportmodal';
/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  showAd: boolean = true;
  pages: any = { doctor: DOCTOR_PAGE, package: PACKAGE_PAGE, recharge: RECHARGE_PAGE };
  @ViewChild('content') content: Content;
  @ViewChild('slider') slider: Slides;
  showNavButton: any;
  _categorys: any[] = [];
  exam: any = {};
  reportIndex: number = 0;
  reports: ReportOptions[] = [];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private examsPro: ExamsProvider,
    private chartsPro: ChartsProvider,
    private nativePro: NativeProvider,
    private modalCtrl: ModalController,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
  ) {}

  ngAfterViewInit() {

    this.exam = this.navParams.data;
    this.showNavButton = this.navCtrl.getPrevious().id != DOCTOR_PAGE && this.exam.payment;

    this.getReport(this.reportIndex).then(res => {

      this._categorys = ReportCategory.filter(item => { return item.code <= res.level }).reverse();
      setTimeout(() => {
        if (!this.exam.payment) {
          this.openPackageModal();
        }
        this.content.resize();
      }, 500);
      console.log(this.report);
    });
  }

  /**
   *查看
   */
  openPackageModal() {
    let modal = this.modalCtrl.create(ReportmodalPage);
    modal.present();
    modal.onDidDismiss(res => {
      res && res.open &&
        this.navCtrl.push(RECHARGE_PAGE, { params: { ordertype: 'exam', selectxbz: res.dvalue, skucode: `exam|${this.exam.guid}` } }).then(res => {
          let achieveSub = this.paymentPro.achieve$.subscribe(res => {
            let start = this.navCtrl.indexOf(this.viewCtrl);
            this.navCtrl.remove(start + 1, res.len - start - 1).then(() => {
              //this.nativePro.showLoading();
              //this.loadData().then(() => this.nativePro.hideLoading());
              this.exam.payment = true;
              achieveSub.unsubscribe();
            });
          });
        })
      //.then(() => this.viewCtrl.dismiss(true));
    });
  }

  changeSlide($event) {
    this.slider && this.slider.slideTo($event);
  }

  onSlideChanged(slider) {
    //重置滑动队列
    if (slider._activeIndex >= this.categorys.length || slider._activeIndex < 0) {
      return;
    }
    this.reportIndex = slider._activeIndex;
    this.report || this.getReport(this.reportIndex, this._categorys[this.reportIndex].code);
  }

  /**
   *请求学情报告数据
   */
  getReport(reportIndex, level ? : number) {
    return this.examsPro.report({ guid: this.exam.guid, level: level }).then(res => {
      this.exam.payment = res.buy;
      this.fill(reportIndex, res);
      this.comranks(this.report.subjects[0]);
      this.ranktrends(this.report.subjects[0]);
      this.scoretrends(this.report.subjects[1]);
      return res;
    })
  }

  /**
   *装填数据
   */
  fill(reportIndex, res) {
    this.reports[reportIndex] = new ReportOptions({
      percent: res.percent,
      studentCount: res.studentcount,
      scores: res.myscore,
      learnanalysis: res.learnanalysis ? this.chartsPro.radar(res.learnanalysis) : null,
      levelanalysis: res.levelanalysis ? this.chartsPro.level(res.levelanalysis) : null,
      level: res.level,
      fields: res.fields,
    });
    //console.log(this.report.scores.shift());
  }

  get categorys() {
    return this._categorys.map(item => { return item.name });
  }

  get report(): ReportOptions {
    return this.reports[this.reportIndex];
  }

  scrollChange(func, name) {
    this[func](name);
  }

  /**
   *排名对比
   */
  comranks(name) {
    if (this.report.activityComranks) {
      return;
    }
    this.report.activityComranks = undefined;
    this.examsPro.comrank({
      guid: this.exam.guid,
      level: this.report.level,
      subject: name
    }).then(res => {
      if (!res) this.report.activityComranks = null;
      this.report.activityComranks = res;
      console.log(res);
    }).catch(ex => this.report.activityComranks = null);
  }

  /**
   *排名趋势,level=3联考时没有排名趋势
   */
  ranktrends(name) {
    if (this.report.level == 3) return this.report.activityRanktrends = false;
    if (this.report.activityRanktrends) return;
    this.report.activityRanktrends = undefined;
    this.examsPro.ranktrend({
      guid: this.navParams.get('guid'),
      level: this.report.level,
      subject: name
    }).then(res => {
      if (!res) this.report.activityRanktrends = null;
      this.report.activityRanktrends = this.chartsPro.scoretrend(res);
      console.log(res);
    }).catch(ex => this.report.activityRanktrends = null);
  }

  /**
   *成绩趋势
   */
  scoretrends(name) {
    if (this.report.activityScoretrends) {
      return;
    }
    this.report.activityScoretrends = undefined;
    this.examsPro.scoretrend({
      guid: this.exam.guid,
      level: this.report.level,
      subject: name
    }).then(res => {
      if (!res) this.report.activityScoretrends = null;
      this.report.activityScoretrends = this.chartsPro.scoretrend(res);
      console.log(res);
    }).catch(ex => this.report.activityScoretrends = null);
  }

  doInfinite(event) {
    console.log(event);
  }

}
