import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import { EnalyzingOptions, EOptions } from '../../model/enalyzing';
import { Times } from '../../model/times';
import {} from '../pages.constants';
import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { NativeProvider } from '../../providers/native';

/**
 * Generated class for the EnalyzingPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enalyzing',
  templateUrl: 'enalyzing.html',
})
export class EnalyzingPage {
  @ViewChild('content') content: Content;
  times = Times;
  processing: boolean;
  showMenu: boolean;

  affixs: any = [];
  enalyzingOpt: EnalyzingOptions;
  affixOpt: any;

  /**
   *显示套餐
   */
  package: boolean;

  /**
   *滚动timer
   */
  //scrollYStart: number;
  scrollTimer: any;

  subjectNames: string[];
  tempOption: EOptions;
  constructor(
    public enalyzingPro: EnalyzingProvider,
    public nativePro: NativeProvider,
    public zone: NgZone
  ) {}

  ngAfterViewInit() {
    this.enalyzingPro.index().then(res => {
      this.subjectNames = res.subject;
      this.enalyzingOpt = new EnalyzingOptions(res, { subject: this.subjectNames[0] });
      this.tempOption = this.enalyzingOpt.option.clone();
      this.affix();
    });

  }

  save() {
    this.showMenu = false;
    if (this.processing || this.enalyzingOpt.option.subject == this.tempOption.subject && this.enalyzingOpt.option.month == this.tempOption.month) return;
    this.enalyzingOpt.option = this.tempOption.clone();
    setTimeout(() => this.subject(), 300);
  }

  subject() {
    this.processing = true;
    this.enalyzingPro && this.nativePro.showLoading();
    this.enalyzingPro.topics(this.enalyzingOpt.option).then(res => {
      this.enalyzingOpt = new EnalyzingOptions(res, this.enalyzingOpt.option);
      this.affix();
      this.package = true;
      this.nativePro.hideLoading();
      this.processing = false;
      console.log(this.enalyzingOpt);
    });
  }


  private affix() {
    setTimeout(() => {
      let affixs = this.content.getNativeElement().querySelectorAll('.affix');
      this.affixs.length = 0;
      for (var i = 0; i < affixs.length; i++) {
        this.affixs.push(affixs[i].offsetTop);
      }
      console.log(this.affixs);
    }, 300);
  }


  doInfinite(event) {
    this.enalyzingPro.moreTopics(this.enalyzingOpt.params).then(res => {
      this.enalyzingOpt.append(res);
      this.affix();
      event.complete();
    });

  }

  excellent(e, q) {
    this.enalyzingPro.excellent({
      guid: this.enalyzingOpt.exams[e].guid,
      subject: this.enalyzingOpt.option.subject,
      nos: JSON.stringify(this.enalyzingOpt.exams[e].questions[q].excellent),
    }).then(res => {
      console.log(res);
      //this.nativePro.showImage(res.map(item,retu))
    });
  }




  /**
   *移除
   */
  del(e, q) {
    this.enalyzingOpt.remove(e, q);
    this.affix();
  }

  toast(message) {

    this.nativePro.toast(message, 1500, "middle");

  }

  scrollEnd(event) {
    clearInterval(this.scrollTimer);
  }

  scrollStart(event) {

    this.scrollTimer = setInterval(() => {
      this.zone.run(() => {
        let index = -1;
        this.affixs.forEach((item, i) => {
          if (event.scrollTop > item) {
            index = i;
          }
        });
        this.affixOpt = index > -1 ? this.enalyzingOpt.exams[index] : null;
      });
    }, 60);
  }

}
