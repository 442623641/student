import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ClaimProvider } from '../../providers/claim/claim';
import { NativeProvider } from "../../providers/native";
import { NotifyProvider } from '../../providers/notify/notify';
import { CLAIMMODAL_PAGE } from '../pages.constants';

/**
 * Generated class for the UnclaimedexamsPage page.
 * Add by chengyiling
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
})
export class ClaimPage {
  unclaimes: any[];
  index: any;
  status: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    private claimPro: ClaimProvider,
    private nativepro: NativeProvider,
    private notifyPro: NotifyProvider,
  ) {}

  ionViewDidLoad() {
    setTimeout(() =>
      this.doRefresh(), 450);
  }

  claim(item) {
    this.claimPro.examineeimg({ guid: item.examguid, studentcode: item.studentcodelist }).then(res => {
      res && this.openModal(item, res);
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  openModal(item, papers) {
    let modal = this.modalCtrl.create(CLAIMMODAL_PAGE, { papers: papers, name: item['studentname'] });
    modal.present();
    modal.onDidDismiss(res => {
      if (!res || !res.code) return;
      this.claimPro.claimexam({ guid: item.examguid, studentcode: res.code })
        .then(res => {
          this.nativepro.showLoading();
          this.doRefresh();
          res && res.claim && this.notifyPro.add('unclaimed', -1);
        })
        .catch(err => {
          console.log(err);
          this.nativepro.toast(err ? err.message : '网络异常，请稍后再试');
        });
    });
  }

  doRefresh(event ? ) {
    let exception = (res) => {
      event ? event.complete() : this.nativepro.hideLoading();
      this.unclaimes = null;
    };
    this.claimPro.unclaimexam().then(res => {
      if (!res || !res.length) return exception(res);
      this.unclaimes = res;
      event && event.complete();
      console.log(res);
      this.nativepro.hideLoading();

    }).catch(ex => exception(ex));
  }
}
