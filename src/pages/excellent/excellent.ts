import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { Component, ViewChild, NgZone, } from '@angular/core';
import { IonicPage, Content, NavParams, ViewController, NavController } from 'ionic-angular';
import { ExcellentOptions, EOptions } from '../../model/excellents';
import { Pageview } from '../../model/pageview';
import { SubjectNames } from '../../model/subjectNames';
import { Grade } from '../../model/grade';
import { PACKAGE_PAGE } from '../pages.constants';
import { NativeProvider } from '../../providers/native';
import { PaymentProvider } from '../../providers/payment/payment';
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
  pages = { package: PACKAGE_PAGE };
  @ViewChild('content') content: Content;
  processing: boolean;
  showMenu: boolean;
  total: number;
  excellentsOpts: ExcellentOptions[];
  subjectNames: string[] = SubjectNames;
  grades: any[] = Grade;
  pageview: Pageview;
  tempOption: EOptions;
  option: EOptions;
  package: boolean;
  achieveSub: any;
  constructor(
    private navCtrl: NavController,
    public excellentPro: EnalyzingProvider,
    public nativePro: NativeProvider,
    public zone: NgZone,
    public navParams: NavParams,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController
  ) {
    this.package = this.navParams.get('package');
  }

  ngAfterViewInit() {
    this.package && this.initialize();

  }
  initialize() {
    this.option = new EOptions({ subject: this.subjectNames[0], grade: this.grades[0].code });
    this.refresh();
  }

  private refresh() {
    this.processing = true;
    this.excellentsOpts && this.nativePro.showLoading();
    this.tempOption = this.option.clone();
    this.pageview = new Pageview();
    this.excellentPro.excellents(Object.assign({}, this.pageview, this.option)).then(res => {
      this.nativePro.hideLoading();
      if (!res || !res.questions || !res.questions.length) return this.excellentsOpts = null;
      this.total = res.total;
      this.excellentsOpts = res.questions.map((item) => { return new ExcellentOptions(item) });

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
      if (res && res.length) {
        this.excellentsOpts = this.excellentsOpts.concat(res.map(item => new ExcellentOptions(item)));
      }
      event.complete();
    }).catch(ex => {
      event.complete();
    })

  }

  open() {
    this.navCtrl.push(this.pages.package).then(() => {
      this.achieveSub = this.paymentPro.achieve$.subscribe(res => {
        this.achieveSub.unsubscribe();
        let start = this.navCtrl.indexOf(this.viewCtrl);
        this.navCtrl.remove(start + 1, res.len - start - 1).then(() => {
          this.package = true;
          delete this.excellentsOpts;
          this.ngAfterViewInit();
        });
      });
    });
  }

  excellent(item) {
    if (item.imgviewer) return;
    this.excellentPro.excellent({
      guid: item.guid,
      subject: this.option.subject,
      nos: item.excellent,
    }).then(res => {
      let imgs = [];
      res.forEach(x =>
        x.link && x.link.forEach(y =>
          Object.prototype.toString.call(y) == '[object Array]' ?
          (imgs = imgs.concat(y)) :
          imgs.push(y))
      );

      item.imgviewer = {
        title: this.option.subject,
        images: imgs
      };
      console.log(res);
    });
  }
  toast(message) {
    this.nativePro.toast(message, 1500, "center");
  }
  ionViewDidEnter() {
    this.achieveSub && this.achieveSub.unsubscribe();
  }


}
