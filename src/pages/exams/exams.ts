import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pageview } from '../../model/pageview';
import { ExamsProvider } from '../../providers/exams/exams';
import { ChartsProvider } from '../../providers/charts/charts';

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public examsPro: ExamsProvider,
    public chartsPro: ChartsProvider,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsPage');
  }
  ngAfterViewInit() {
    this.doRefresh(null);
  }

  doRefresh(event) {

    this.view = new Pageview();

    this.examsPro.exams(this.view).then(res => {
      if (!res || !res.latest) {
        this.latest = null;
        return;
      }
      console.log(res);
      this.latest = res.latest;
      this.waterball = this.chartsPro.ball(this.latest.percent, this.latest.score);
      this.exams = res.exams;
      event && event.complete();
    });
  }

  doInfinite() {
    this.view.viewindex++;
    this.examsPro.exams(this.view).then(res => {
      console.log(res);
    });
  }
}
