import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { NativeProvider } from '../../providers/native';
import { ElostOptions, Elost } from '../../model/elost';
import {} from '../pages.constants';

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

  /**
   * child pages
   */
  pages: any = {

  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
    public nativePro: NativeProvider
  ) {
    this.elost = new Elost(this.navParams.data);
  }

  ngAfterViewInit() {
    console.log('ionViewDidLoad LostoptionPage');
    this.elost.exams.length || this.exams();
  }

  exams() {
    this.lostPro.exams({ subject: this.elost.name, index: 0, viewlength: 10, type: 1 }).then(res => {
      this.elost.append(res.exams, res.end, res.index);
      console.log(this.elost);
    });
  }

  ionViewDidLeave() {
    console.log('LostoptionPage ionViewDidLeave');
    this.lostPro.setElost(this.elost);
  }

  save() {
    this.lostPro.setElost(this.elost);

    //this.navCtrl.pop();
  }


  // back() {
  //   this.nativePro.confirm("是否保存选中信息？", ["不保存", "保存"]).then(res => {
  //     this.navCtrl.pop();
  //   });
  // }


}
