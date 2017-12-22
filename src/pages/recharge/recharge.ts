import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { PAYMENT_PAGE } from '../pages.constants';
import { PaymentOption } from '../../model/payment';
/**
 * Generated class for the RechargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html',
})
export class RechargePage {

  options: number[] = [100, 200, 500, 800];
  params: PaymentOption;
  amount: number = 100;
  need: number = 0;
  lastVal: number;
  MIN = 1;
  MAX = 10000;

  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
  ) {
    this.params = navParams.get('params');
  }

  ionViewDidLoad() {

    if (!this.params) {
      return;
    }
    if (this.params.selectxbz) {
      this.amount = this.need = Math.max(this.params.selectxbz, this.MIN);
      if (this.options.indexOf(this.need) == -1) {
        this.options.push(this.need);
        this.options = this.options.sort((a, b) => { return a - b; });
      }
    }
  }

  tap(val) {
    this.amount = val;
  }
}
