import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, ViewController } from 'ionic-angular';
import { ExamsProvider } from '../../providers/exams/exams';
import { ChartsProvider } from '../../providers/charts/charts';
import { PaymentProvider } from '../../providers/payment/payment';
import { ReportOptions, ReportCategory } from '../../model/report';
import { DOCTOR_PAGE, PACKAGE_PAGE, RECHARGE_PAGE, REPLY_PAGE } from '../pages.constants';
import { NativeProvider } from '../../providers/native';
import { CouponProvider } from '../../providers/coupon/coupon';
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
  pages: any = { doctor: DOCTOR_PAGE, package: PACKAGE_PAGE, recharge: RECHARGE_PAGE, reply: REPLY_PAGE };
  @ViewChild('content') content: Content;
  @ViewChild('slider') slider: Slides;
  showNavButton: any;
  categorys: any[] = [];
  categorysValue: string[];
  exam: any = {};
  reportIndex: number = 0;
  reports: ReportOptions[] = [];
  infinites: boolean[] = [true, true];

  couponCount: number = 0;
  price: number = 0;
  balance: number = 0;
  achieveSub: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private examsPro: ExamsProvider,
    private chartsPro: ChartsProvider,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
    private nativePro: NativeProvider,
    private couponPro: CouponProvider
  ) {}

  ionViewDidLoad() {
    this.initializePackage();
    setTimeout(() => {
      this.exam = this.navParams.data;
      this.exam.payment || this.couponPro.getcount().then(res => this.couponCount = res.count || 0).catch();
      this.showNavButton = this.navCtrl.getPrevious().id != DOCTOR_PAGE;
      this.getReport(this.reportIndex).then(res => {
        this.categorys = ReportCategory.filter(item => { return item.code <= res.level }).reverse();
        this.categorysValue = this.categorys.map(item => { return item.name });
        this.content.resize();
        this.price = res.coin;
      });
    }, 550);
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
    this.report || this.getReport(this.reportIndex, this.categorys[this.reportIndex].code);
  }

  /**
   *请求学情报告数据
   */
  getReport(reportIndex, level ? : number) {
    return this.examsPro.report({ guid: this.exam.guid, level: level }).then(res => {
      this.exam.payment = res.buy;
      this.fill(reportIndex, res);
      this.doInfinite();
      // setTimeout(() => this.doInfinite(), 1500);
      return res;
    }).catch(ex => this.reports[reportIndex] = null);
  }

  /**
   *装填数据
   */
  fill(reportIndex, res) {
    this.reports[reportIndex] = res.myscore ? new ReportOptions({
      percent: res.percent,
      studentCount: res.studentcount,
      scores: res.myscore,
      learnanalysis: res.learnanalysis ? this.chartsPro.radar(res.learnanalysis) : null,
      levelanalysis: res.levelanalysis ? this.chartsPro.level(res.levelanalysis) : null,
      level: res.level,
      fields: res.fields,
      scoreSubjects: res.scoreSubjects,
      rankSubjects: res.rankSubjects,
      payment: res.buy,
    }) : null;
    //console.log(this.report.scores.shift());
  }

  get report(): ReportOptions {
    return this.reports[this.reportIndex];
  }

  /**
   *排名对比
   */
  comranks(name) {
    if (this.report.activityComranks) {
      return Promise.resolve();
    }
    this.report.activityComranks = undefined;
    return this.examsPro.comrank({
      guid: this.exam.guid,
      level: this.report.level,
      subject: name,
      score: this.report.scores.find(x => { return x.name == name }).subjects[0]
    }).then(res => {
      if (!res || !res.length) return this.report.activityComranks = null;
      this.report.activityComranks = res;
      //console.log(res);
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
      this.report.activityRanktrends = this.chartsPro.scoretrend(res, res.name || '排名', true);
      //console.log(res);
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
      })
      .then(res => {
        if (!res) this.report.activityScoretrends = null;
        this.report.activityScoretrends = this.chartsPro.scoretrend(res, "得分率 %");
        //console.log(res);
      })
      .catch(ex => this.report.activityScoretrends = null);
  }

  doInfinite() {
    this.infinites[this.reportIndex] = false;
    this.report.scoreSubjects.length && this.scoretrends(this.report.scoreSubjects[0]);
    this.report.rankSubjects.length && this.ranktrends(this.report.rankSubjects[0]);
    this.comranks(this.report.subjects[0]);
    //console.log(event);
  }

  ionViewDidEnter() {
    this.achieveSub && this.achieveSub.unsubscribe();
  }


  /**
   *学情报告未生成时，初始化优惠券余额等信息
   */
  initializePackage() {

    if (this.navParams.get('payment')) return;
    this.couponPro.getcount().then(res => this.couponCount = res.count || 0).catch();
    this.paymentPro.getLocalBalance().then(res => this.balance = res);
    //this.examsPro.reportfee().then(res => this.price = res[0].value);

  }


  /**
   *学情报告未生成是，点击查看学情报告
   */
  openPackage() {
    const COIN = this.price;
    let callback = () => {
      this.achieveSub = this.paymentPro.achieve$.subscribe(res => {
        let start = this.navCtrl.indexOf(this.viewCtrl);
        this.navCtrl.remove(start + 1, res.len - start - 1).then(() => {
          this.exam.payment = true;
          this.report.resetPayment(true);
          this.achieveSub.unsubscribe();
        });
      });
    }


    //有优惠劵前往学情套餐
    if (this.couponCount) {
      return this.nativePro.confirm(`您现有${this.couponCount}张优惠券，开通学情套餐更为划算哦！`, ['取消', '立即开通'], '开通学情套餐')
        .then(btn => {
          btn && this.navCtrl.push(PACKAGE_PAGE).then(() => callback())
        })
    }

    //学贝充足，生产学情报告
    if (this.balance >= COIN) {
      return this.nativePro.confirm(`您当前持有${this.balance}学贝，生成本次学情报告需消耗${COIN}学贝`, ['取消', '立即生成'], '生成学情报告')
        .then(btn => {
          btn && this.paymentPro.sa({ ordertype: 'exam', examguid: this.exam.guid }).then(res => {
            this.nativePro.prompt("成功生成学情报告");
            this.exam.payment = true;
          })
        })
    }

    //学贝不足，充值
    if (this.balance < COIN) {
      return this.nativePro.confirm(`您当前持有${this.balance}学贝，生成本次学情报告需要${COIN}学贝，还需充值${COIN-this.balance}学贝`, ['取消', '立即充值'], '生成学情报告')
        .then(btn => {
          btn && this.navCtrl.push(RECHARGE_PAGE, {
              params: {
                ordertype: 'exam',
                examguid: this.exam.guid,
                selectxbz: COIN - this.balance,
                skucode: `exam|${this.exam.guid}`
              }
            })
            .then(res => callback());
        })
    }
  }

}
