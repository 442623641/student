import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, Content, ModalController, ViewController, NavController } from 'ionic-angular';
import { EnalyzingOptions, EOptions } from '../../model/enalyzing';
import { Times } from '../../model/times';
import { PACKAGE_PAGE, ENALYZINGMODAL_PAGE } from '../pages.constants';
import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';

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
  templateUrl: 'enalyzing.html',
})
export class EnalyzingPage {
  pages = { package: PACKAGE_PAGE };
  @ViewChild('content') content: Content;
  times = Times;
  showMenu: boolean;

  affixs: any = [];
  enalyzingOpt: EnalyzingOptions;
  affixOpt: any;

  /**
   *显示套餐
   */
  package: boolean;

  subjectNames: string[];
  tempOption: EOptions;
  achieveSub: any;
  modal: any;
  openButtonState: 'openPackage' | 'refresh' = 'openPackage';
  constructor(
    public enalyzingPro: EnalyzingProvider,
    public nativePro: NativeProvider,
    public zone: NgZone,
    private modalCtrl: ModalController,
    private paymentPro: PaymentProvider,
    private viewCtrl: ViewController,
    private navCtrl: NavController
  ) {}

  ionViewDidLoad() {
    this.refresh();
  }

  refresh(shouldHideLoading ? ) {
    shouldHideLoading && this.nativePro.showLoading();
    setTimeout(() => {
      this.enalyzingPro.index().then(res => {
        if (!res || !res.subject) return this.enalyzingOpt = null;
        this.subjectNames = res.subject;
        this.enalyzingOpt = new EnalyzingOptions(res, { subject: this.subjectNames[0] });
        this.tempOption = this.enalyzingOpt.option.clone();
        this.affix();
        this.openPackageModal();
        if (shouldHideLoading) {
          this.nativePro.hideLoading();
          if (this.enalyzingOpt.total && this.enalyzingOpt.unauthorized > 0) this.openButtonState = "refresh";
        }
        setTimeout(() => this.content.resize(), 300);
      }).catch(ex => {
        this.enalyzingOpt = null;
        shouldHideLoading && this.nativePro.hideLoading();

        return Promise.reject({});
      });
    }, 450);
  }

  save() {
    this.showMenu = false;
    if (this.enalyzingOpt.option.subject == this.tempOption.subject && this.enalyzingOpt.option.month == this.tempOption.month) return;
    this.enalyzingOpt.option = this.tempOption.clone();
    setTimeout(() => this.subject(), 300);
  }

  subject() {
    this.enalyzingPro && this.nativePro.showLoading();
    this.content.scrollToTop();
    this.enalyzingPro.topics(this.enalyzingOpt.option).then(res => {
      this.enalyzingOpt = new EnalyzingOptions(res, this.enalyzingOpt.option);
      this.affix();
      this.package = true;
      this.nativePro.hideLoading();
      this.openPackageModal();
      //console.log(this.enalyzingOpt);
    }).catch(ex => {
      this.nativePro.hideLoading();
      this.affixs.length = 0;
    })
  }


  private affix() {
    setTimeout(() => {
      let affixs = this.content.getNativeElement().querySelectorAll('.affix');
      this.affixs.length = 0;
      for (var i = 0; i < affixs.length; i++) {
        this.affixs.push(affixs[i].offsetTop);
      }
      //console.log(this.affixs);
    }, 300);
  }


  doInfinite(event) {
    this.enalyzingPro.moreTopics(this.enalyzingOpt.params).then(res => {
      this.enalyzingOpt.append(res);
      this.affix();
      event.complete();
    }).catch(ex => event.complete());

  }

  excellent(e, q) {
    let exam = this.enalyzingOpt.exams[e],
      item = exam.questions[q];
    if (item['imgviewer']) return;
    let error = () => {
      this.toast('暂无优秀答案，请稍后再试');
      this.nativePro.hideLoading();
    };
    this.nativePro.showLoading();
    this.enalyzingPro.excellent({
      guid: exam.guid,
      subject: this.enalyzingOpt.option.subject,
      nos: item.excellent,
    }).then(res => {
      if (!res.length) return error();
      let imgs = [];
      res.forEach(x =>
        x.link && x.link.forEach(y =>
          Object.prototype.toString.call(y) == '[object Array]' ?
          (imgs = imgs.concat(y)) :
          imgs.push(y))
      );
      item['imgviewer'] = {
        title: this.enalyzingOpt.option.subject,
        images: imgs
      };
      this.nativePro.hideLoading();
    }).catch(() => error());
  }


  /**
   *准备移除
   */
  remove(que: any) {
    this.nativePro.confirm('删除后不可恢复', ['取消', '删除'], '确认删除吗?').then(btn => {
      que.delete = !!btn;
    });
  }

  /**
   *移除
   */
  del(e, q) {

    let exam = this.enalyzingOpt.exams[e];
    this.enalyzingPro
      .remove({ no: exam.questions[q].name, subject: this.enalyzingOpt.option.subject, guid: exam.guid })
      .then(res => {})
      .catch(ex => console.log(ex));
    this.enalyzingOpt.remove(e, q);
    this.affix();
  }

  toast(message) {
    this.nativePro.toast(message, 1500, "center");
  }

  scrollHandler(event) {
    this.zone.run(() => {
      let index = -1;
      this.affixs.forEach((item, i) => {
        if (event.scrollTop > item) index = i;
      });
      this.affixOpt = index > -1 ? this.enalyzingOpt.exams[index] : null;
    });
  }

  open() {
    this[this.openButtonState]();
  }
  /**
   *查看
   */
  openPackageModal() {
    if (!this.enalyzingOpt.unauthorized || this.enalyzingOpt.unauthorized == this.enalyzingOpt.total) return;
    this.modal = this.modalCtrl.create(ENALYZINGMODAL_PAGE, { option: { total: this.enalyzingOpt.total, unauthorized: this.enalyzingOpt.unauthorized } });
    this.modal.present();
    this.modal.onDidDismiss(res => res && res.open && this.openPackage());
  }

  openPackage() {
    this.navCtrl.push(PACKAGE_PAGE).then(() => {
      this.achieveSub = this.paymentPro.achieve$.subscribe(res => {
        this.achieveSub.unsubscribe();
        let start = this.navCtrl.indexOf(this.viewCtrl);
        this.navCtrl.remove(start + 1, res.len - start - 1).then(() => {
          this.refresh(true);
        }).catch(ex => {
          this.refresh(true);
        })
      });
    })
  }
  ionViewDidEnter() {
    this.achieveSub && this.achieveSub.unsubscribe();
  }
  ionViewWillLeave() {
    this.showMenu = false;
  }

  ngOnDestory() {
    this.modal && this.modal.dismiss && this.modal.dismiss();
  }

}
