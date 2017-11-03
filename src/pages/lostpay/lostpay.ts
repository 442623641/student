import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import {} from '../pages.constants';

/**
 * Generated class for the LostpayPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostpay',
  templateUrl: 'lostpay.html',
})
export class LostpayPage {
  /**
   * 单价
   */
  price: number;

  /**
   * 支付学贝
   */
  coin: number;

  /**
   * child pages
   */
  pages: any = {

  }

  subjectNames: string[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
  ) {
    this.subjectNames = this.navParams.get('subjects');
  }

  ngAfterViewInit() {
    this.setPrice(80);
    console.log('ionViewDidLoad LostpayPage');

  }

  setPrice(val: number) {
    this.price = val;
    this.coin = this.subjectNames.length * this.price;
  }

}
