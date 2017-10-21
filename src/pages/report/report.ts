import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';
import { ExamsProvider } from '../../providers/exams/exams';
import { EchartsNg2Module } from 'echarts-ng2';
import { ChartsProvider } from '../../providers/charts/charts';
import { ReportOptions, ReportCategory } from '../../model/report';
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
  @ViewChild('content') content: Content;
  @ViewChild('slider') slider: Slides;
  _categorys: any[] = [];
  name: string;
  reportIndex: number = 0;
  reports: ReportOptions[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public examsPro: ExamsProvider,
    public chartsPro: ChartsProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  ngAfterViewInit() {
    this.name = this.navParams.get('name');

    this.getReport(this.reportIndex).then(res => {

      this._categorys = ReportCategory.filter(item => { return item.code <= res.level }).reverse();
      setTimeout(() => this.content.resize(), 300);
      console.log(this.report);

    })
    //this.reportPro.
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
    return this.examsPro.report({ guid: this.navParams.get('guid'), level: level }).then(res => {
      this.fill(reportIndex, res);
      return res;
    });
  }

  /**
   *装填数据
   */
  fill(reportIndex, res) {
    this.reports[reportIndex] = new ReportOptions({
      percent: res.percent,
      studentCount: res.studentcount,
      scores: res.myscore,
      learnanalysis: this.chartsPro.radar(res.learnanalysis),
      levelanalysis: this.chartsPro.level(res.levelanalysis),
      level: res.level,
      fields: res.fields,
    });
    console.log(this.report.scores.shift());
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
      guid: this.navParams.get('guid'),
      level: this.report.level,
      subject: name
    }).then(res => {
      this.report.activityComranks = res;
      console.log(res);
    }).catch(ex => this.report.activityComranks = null);
  }

  /**
   *排名趋势
   */
  ranktrends(name) {
    if (this.report.activityRanktrends) {
      return;
    }
    this.report.activityComranks = undefined;
    this.examsPro.ranktrend({
      guid: this.navParams.get('guid'),
      level: this.report.level,
      subject: name
    }).then(res => {
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
      guid: this.navParams.get('guid'),
      level: this.report.level,
      subject: name
    }).then(res => {
      this.report.activityScoretrends = this.chartsPro.scoretrend(res);
      console.log(res);
    }).catch(ex => this.report.activityScoretrends = null);
  }

}
