import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { NativeProvider } from '../../providers/native';
import { Elost } from '../../model/elost';
//import {} from '../pages.constants';

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
  end: boolean;

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

    this.end = false;
    this.page = { index: 0, viewlength: 10 };
    this.lostPro.exams(Object.assign({ subject: this.elost.name, type: this.elost.type }, this.page)).then(res => {
      if (!res || !res.exams || !res.exams.length) return this.elost.state = null;
      this.fill(res)
    }).catch(ex => {
      console.error(ex);
      this.elost.state = null;
    })
  }

  doInfinite(event) {
    this.lostPro.exams(Object.assign({ subject: this.elost.name, type: this.elost.type }, this.page)).then(res => {
      if (!res || !res.exams || !res.exams.length) return this.end = true;
      this.fill(res)
    }).catch(ex => {
      console.error(ex);
    })
  }
  fill(res) {
    this.page.index = res.index;
    this.elost.append(res.exams, res.end, res.index);
    this.end = res.end;
    if (this.end) this.elost.count = this.elost.exams.length;
  }

  save(shouldClose ? : boolean) {
    this.elost && this.lostPro.setElost(this.elost);
    shouldClose && this.navCtrl.pop();
  }

}
