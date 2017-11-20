import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { PAYMENT_PAGE } from '../pages.constants';
import { PaymentOption } from '../../model/payment';
import { UserProvider } from '../../providers/user';
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
  balance: number = 0;
  need: number = 0;

  constructor(

    public navCtrl: NavController,

    public navParams: NavParams,
    public userPro: UserProvider

  ) {}

  ngAfterViewInit() {
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
    this.userPro.getUserInfo().then(res => this.balance = res.coin);
  }

  tap(val) {
    this.amount = val;
  }

}
