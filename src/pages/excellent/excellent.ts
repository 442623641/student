import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import { ExcellentOptions, EOptions } from '../../model/excellents';
import { Pageview } from '../../model/pageview';
import { SubjectNames } from '../../model/subjectNames';
import { Grade } from '../../model/grade';
import {} from '../pages.constants';
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
  templateUrl: 'excellent.html',
})
export class ExcellentPage {
  @ViewChild('content') content: Content;
  processing: boolean;
  showMenu: boolean;
  total: number;

  // affixs: any = [];
  excellentsOpts: ExcellentOptions;
  // affixOpt: any;

  /**
   *滚动timer
   */
  //scrollYStart: number;
  // scrollTimer: any;

  subjectNames: string[] = SubjectNames;
  grades: any[] = Grade;
  pageview: Pageview = new Pageview();
  tempOption: EOptions;
  option: EOptions;
  constructor(
    public excellentPro: EnalyzingProvider,
    public nativePro: NativeProvider,
    public zone: NgZone
  ) {}

  ngAfterViewInit() {
    this.option = new EOptions({ subject: this.subjectNames[0], grade: this.grades[0].code });
    this.refresh();
  }

  private refresh() {
    this.processing = true;
    this.excellentsOpts && this.nativePro.showLoading();
    this.excellentPro.excellents(Object.assign({}, this.pageview, this.option)).then(res => {
      this.nativePro.hideLoading();
      if (!res || !res.questions || !res.questions.length) return this.excellentsOpts = null;
      this.total = res.total;
      this.excellentsOpts = res.questions.map((item) => { return new ExcellentOptions(item) });
      this.tempOption = this.option.clone();

      this.processing = false;
    }).catch(ex => {
      console.error(ex);
      this.nativePro.hideLoading();
      this.excellentsOpts = null;
    });
  }

  save() {
    this.showMenu = false;
    if (this.processing || this.option.subject == this.tempOption.subject && this.option.grade == this.tempOption.grade) return;
    this.option = this.tempOption.clone();
    setTimeout(() => this.refresh(), 300);
  }

  doInfinite(event) {
    this.pageview.viewindex++;
    this.excellentPro.excellents(Object.assign({}, this.pageview, this.option)).then(res => {
      this.excellentsOpts = res.map(item => new ExcellentOptions(item));
      event.complete();
    });

  }

  excellent(index) {
    this.excellentPro.excellent({
      guid: this.excellentsOpts[index].guid,
      subject: this.option.subject,
      nos: JSON.stringify(this.excellentsOpts[index].excellent),
    }).then(res => {
      console.log(res);
      //this.nativePro.showImage(res.map(item,retu))
    });
  }



  toast(message) {

    this.nativePro.toast(message, 1500, "middle");

  }

  // scrollEnd(event) {
  //   clearInterval(this.scrollTimer);
  // }

  // scrollStart(event) {

  //   this.scrollTimer = setInterval(() => {
  //     this.zone.run(() => {
  //       let index = -1;
  //       this.affixs.forEach((item, i) => {
  //         if (event.scrollTop > item) {
  //           index = i;
  //         }
  //       });
  //       this.affixOpt = index > -1 ? this.enalyzingOpt.exams[index] : null;
  //     });
  //   }, 60);
  // }

}
