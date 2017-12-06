import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { LostProvider } from '../../providers/lost/lost';
import { AddressProvider } from '../../providers/address/address';
import { PAYMENT_PAGE, COUPON_PAGE, ADDRESSES_PAGE, ADDRESS_PAGE } from '../pages.constants';
import { LostParams } from '../../model/elost';
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
  total: number;
  options: LostParams;
  /**
   * 运费
   */
  expressAmount: number = 0;

  amount: number = 0;

  /**
   * child pages
   */
  pages: any = {
    payment: PAYMENT_PAGE,
    coupon: COUPON_PAGE,
    addresses: ADDRESSES_PAGE,
    address: ADDRESS_PAGE
  }

  addressSub: any;

  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    private addressPro: AddressProvider,
  ) {
    this.options = navParams.get('params');
    this.expressAmount = navParams.get('express');
    this.total = this.options.amount * 10 + this.expressAmount;
    this.addressPro.last().then((res) => this.options.area = res).catch();
  }

  couponChange(event) {
    this.options.couponcode = event.couponCode;
    this.amount = Number((event.amount / 10).toFixed(2));
    this.total = event.amount + this.expressAmount * 10;
    console.log(this.amount);
  }
  address() {
    this.navCtrl.push(this.pages.address, this.options.area).then((res) => {
      this.addressSub = this.addressPro.$onChange.subscribe(res => {
        console.log(res);
        this.options.area = res;
      })
    })
  }
  ionViewDidEnter() {
    this.addressSub && this.addressSub.unsubscribe();
  }
}
