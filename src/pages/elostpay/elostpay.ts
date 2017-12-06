import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { PAYMENT_PAGE, COUPON_PAGE } from '../pages.constants';
import { PaymentOption, Order } from '../../model/payment';
import { Elost } from '../../model/elost';
/**
 * Generated class for the LostpayPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elostpay',
  templateUrl: 'elostpay.html',
})
export class ElostpayPage {

  subjects: Elost[];
  subjectNames: any[];
  /**
   * 单价
   */
  price: number = 80;

  /**
   * child pages
   */
  pages: any = {
    payment: PAYMENT_PAGE,
    coupon: COUPON_PAGE
  }

  /**
   * 订单信息
   */
  payOptions: PaymentOption;

  order: Order = new Order();

  eguids: { name: string, exams: string }[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
  ) {
    this.subjects = this.navParams.get('params');
    this.subjectNames = this.subjects.map(item => { return item.name });

    this.eguids = this.subjects.map(item => {
      return {
        name: item.name,
        exams: item.exams.map(e => {
          return e.guid;
        }).join(',')
      }
    });
    this.setPrice(this.price);
    //console.log(this.eguids);
  }

  balanceChange(event) {
    this.order = new Order(event, this.subjects.length * this.price);
    this.setPrice(this.price);
  }

  // ionViewDidLoad() {

  //   console.log('ionViewDidLoad LostpayPage');
  // }

  setPrice(val: number) {
    this.price = val;
    this.order.setValue(this.subjects.length * this.price);
    this.setParams(this.order);
  }

  /**
   *确认下单
   */
  couponChange(event) {
    this.order.setCoupon(event);
    this.setParams(this.order);
  }

  setParams(obj: Order) {
    this.payOptions = { ordertype: 'elecerrorbook', amount: obj.amount, product: 0, examguids: this.eguids }
    if (obj.coupon) this.payOptions.couponcode = obj.coupon;
  }


}
