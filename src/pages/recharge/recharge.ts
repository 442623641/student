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

  //pages: any = { payment: PAYMENT_PAGE }
  //payOptions: PaymentOption;
  options: number[] = [100, 200, 500, 800];
  params: PaymentOption;
  amount: number = 100;
  need: number = 0;
  lastVal: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  ionViewDidLoad() {
    this.params = this.navParams.get('params');
    if (this.params) {
      if (this.params.selectxbz) {
        this.amount = this.need = this.params.selectxbz;
        if (this.options.indexOf(this.need) == -1) {
          this.options.push(this.need);
          this.options = this.options.sort((a, b) => { return a - b; });
        }
      }
    }
  }

  tap(val) {
    this.amount = val;
  }

  onInput(e) {
    if (!e.target.valueAsNumber && e.which) {
      this.amount = e.target.value = this.lastVal;
      return;
    }
    if (e.target.valueAsNumber > 10000) this.amount = e.target.value = 10000;
    this.lastVal = e.target.value;
  }
}
