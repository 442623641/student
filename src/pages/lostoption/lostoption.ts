import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { NativeProvider } from '../../providers/native';
import { Elost } from '../../model/elost';
import { LOST_PAGE } from '../pages.constants';

/**
 * Generated class for the LostoptionPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostoption',
  templateUrl: 'lostoption.html',
})
export class LostoptionPage {
  elost: Elost;
  page: { index: number, viewlength: number };
  //end: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
    public nativePro: NativeProvider
  ) {
    this.elost = new Elost(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostoptionPage');
    this.elost.exams.length || this.exams();
  }

  exams() {

    //this.end = false;
    this.page = { index: 0, viewlength: 10 };
    this.lostPro.exams({ subject: this.elost.name, type: this.elost.type, index: this.elost.index || 0, viewlength: 10 }).then(res => {
      if (!res || !res.exams || !res.exams.length) return this.elost.state = null;
      this.fill(res)
    }).catch(ex => {
      console.error(ex);
      this.elost.state = null;
    })
  }

  doInfinite(event) {
    this.lostPro.exams({ subject: this.elost.name, type: this.elost.type, index: this.elost.index, viewlength: 10 }).then(res => {
      event.complete();
      if (!res || !res.exams || !res.exams.length) return;
      this.fill(res)
    }).catch(ex => {
      event.complete();
      console.error(ex);
    })
  }
  fill(res) {
    this.elost.append(res.exams, res.end, res.index);
    this.lostPro.replaceElost(this.elost);
  }

  save(shouldClose ? : boolean) {
    let pop = () => {
      this.elost && this.lostPro.setElost(this.elost);
      shouldClose && this.navCtrl.pop();
    }

    this.navCtrl.getPrevious().id == LOST_PAGE ? this.nativePro
      .confirm('是否需要匹配相关知识点练习题？', ['不需要', '需要'], '练习题', false, true)
      .then((btn: number) => {
        if (btn < 2) this.elost.isPromote = 0;
        if (btn == 2) this.elost.isPromote = 1;
        (btn - 1 >= 0) && pop();
      }) : pop();
  }

}
