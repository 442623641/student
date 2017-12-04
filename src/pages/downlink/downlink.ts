import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { ELOSTGUIDE_PAGE } from '../pages.constants';

/**
 * Generated class for the DownlinkPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downlink',
  templateUrl: 'downlink.html',
})
export class DownlinkPage {
  pages: any = { guide: ELOSTGUIDE_PAGE, }
  order: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider
  ) {
    this.order = this.navParams.get('order');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownlinkPage');
  }

}
