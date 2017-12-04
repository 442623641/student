import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, Content, ModalController, ViewController, NavController } from 'ionic-angular';
import { EnalyzingOptions, EOptions } from '../../model/enalyzing';
import { Times } from '../../model/times';
import { PACKAGE_PAGE } from '../pages.constants';
import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { NativeProvider } from '../../providers/native';
import { PaymentProvider } from '../../providers/payment/payment';
import { EnalyzingmodalPage } from '../enalyzingmodal/enalyzingmodal';
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
  processing: boolean;
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
    setTimeout(() => {
      this.enalyzingPro.index().then(res => {
        if (!res || !res.subject) {
          this.enalyzingOpt = null;
        }
        this.subjectNames = res.subject;
        this.enalyzingOpt = new EnalyzingOptions(res, { subject: this.subjectNames[0] });
        this.tempOption = this.enalyzingOpt.option.clone();
        this.affix();
        this.openPackageModal();
      }).catch(ex => {
        this.enalyzingOpt = null;
      });
    }, 450);
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
      this.openPackageModal();

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
    }).catch(ex => event.complete());

  }

  excellent(item) {
    if (item.imgviewer) return;
    let error = () => { this.toast('暂无优秀答案，请稍后再试') };
    this.enalyzingPro.excellent({
      guid: item.guid,
      subject: this.enalyzingOpt.option.subject,
      nos: item.excellent,
    }).then(res => {
      if (res.length) return error();
      let imgs = [];
      res.forEach(x =>
        x.link && x.link.forEach(y =>
          Object.prototype.toString.call(y) == '[object Array]' ?
          (imgs = imgs.concat(y)) :
          imgs.push(y))
      );
      item.imgviewer = {
        title: this.enalyzingOpt.option.subject,
        images: imgs
      };
    }).catch(() => error());
  }


  /**
   *准备移除
   */
  remove(que: any) {
    this.nativePro.confirm('要继续删除吗，删除后不可恢复', ['删除', '取消']).then(btn => que.delete = !btn);
  }
  /**
   *移除
   */
  del(e, q) {

    let exam = this.enalyzingOpt.exams[e];
    this.enalyzingPro
      .remove({ no: exam.questions[q].no, subject: this.enalyzingOpt.option.subject, guid: exam.guid })
      .then(res => console.log(res));
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
  /**
   *查看
   */
  openPackageModal() {
    if (!this.enalyzingOpt.unauthorized || this.enalyzingOpt.unauthorized == this.enalyzingOpt.total) return;
    let modal = this.modalCtrl.create(EnalyzingmodalPage, { option: { total: this.enalyzingOpt.total, unauthorized: this.enalyzingOpt.unauthorized } });
    modal.present();
    modal.onDidDismiss(res => res && res.open &&
      this.navCtrl.push(PACKAGE_PAGE).then(() => {
        this.achieveSub = this.paymentPro.achieve$.subscribe(res => {
          this.achieveSub.unsubscribe();
          let start = this.navCtrl.indexOf(this.viewCtrl);
          this.navCtrl.remove(start + 1, res.len - start - 1).then(() => {
            //this.nativePro.showLoading();
            //this.loadData().then(() => this.nativePro.hideLoading());
            //this.exam.payment = true;
          });
        });
      })
    )
  }
  ionViewDidEnter() {
    this.achieveSub && this.achieveSub.unsubscribe();
  }
}
