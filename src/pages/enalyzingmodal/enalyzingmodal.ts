import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EnalyzingmodalPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-enalyzingmodal',
  templateUrl: 'enalyzingmodal.html',
})
export class EnalyzingmodalPage {
  option: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.option = this.navParams.get('option');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnalyzingmodalPage');
  }
  onTap() {
    this.viewCtrl.dismiss({ open: true });
    //this.navCtrl.push('PackagePage').then(() => this.viewCtrl.dismiss());
  }


}
