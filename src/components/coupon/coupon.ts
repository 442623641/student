import { Component, Input, Output, EventEmitter } from '@angular/core';
import { COUPON_PAGE } from '../../pages/pages.constants';
import { CouponProvider } from '../../providers/coupon/coupon';
import { PaymentProvider } from '../../providers/payment/payment';
/**
 * Generated class for the CouponComponent component.
 * add by Leo
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'coupon',
  templateUrl: 'coupon.html'
})
export class CouponComponent {
  //inited: boolean;
  page = COUPON_PAGE;
  coupon: any = { couponType: 1, money: 0, amount: 0 };
  coupons: any[];
  params: any;
  _value: number;
  balance: number = 0;
  dvalue: number;
  inited: boolean;
  subscribe: any;

  /**
   *0：通用优惠券，1：套餐，2：错题本，3：电子错题本
   */
  @Input() type ? : 0 | 1 | 2 | 3;
  @Input()
  get value() {
    return this._value;
  }
  set value(val: number) {
    if (!val) return;
    if (!this.inited && this.type != 2) {
      this.paymentPro.getLocalBalance().then(res => {
        this.balance = res;
        this.check(val);
      });
    } else {
      val != undefined && this.check(val);
    }
  }
  @Output() onChange = new EventEmitter();

  constructor(
    private couponPro: CouponProvider,
    private paymentPro: PaymentProvider,
  ) { console.log('Hello CouponComponent Component') }

  ngAfterViewInit() {
    this.subscribe = this.couponPro.checked$.subscribe(res => {
      this.emit(res ? Object.assign(res, {
        amount: Math.max(res.couponType > 0 ? (this.dvalue - res.money * 10) : this.dvalue * res.rate, 0)
      }) : { amount: this.dvalue, couponName: '选择优惠劵' })
    });
  }

  private check(val) {
    if (this._value == val) return;
    this._value = val;
    this.dvalue = val - this.balance;
    if (this.dvalue <= 0) {
      return this.emit();
    }
    this.getCoupons();
  }

  /**
   *优惠劵列表
   */
  private getCoupons() {
    if (this.inited) {
      return this.matriculate();
    }
    this.params = { isexpired: 0, type: this.type };
    this.couponPro.getlist(this.params).then(res => {
      this.inited = true;
      console.log(res);
      if (!res || !res.list || !res.list.length) {
        this.coupons = null;
        return this.emit({ amount: this.dvalue, couponName: '无可用优惠劵' });
      }
      this.coupons = res.list;
      this.matriculate();
    }).catch(ex => {
      this.inited = true;
    })
  }

  /**
   *最优选择
   */
  private matriculate() {
    if (!this.coupons || !this.coupons.length || this.dvalue <= 0) return;
    let money = this.dvalue,
      index = 0;
    this.coupons.forEach((item, i) => {
      let m = item.couponType > 0 ? (this.dvalue - item.money * 10) : this.dvalue * item.rate;
      if (m >= 0 && m <= money || m <= 0 && (money > 0 || money <= 0 && m > money)) {
        money = m;
        index = i;
      }
    });
    return this.emit(Object.assign({}, { amount: Math.max(money, 0) }, this.coupons[index]));
  }

  emit(coupon: any = { amount: 0 }) {
    if (this.coupon.couponCode == coupon.couponCode && this.coupon.amount == coupon.amount) return;
    this.coupon = coupon;
    this.onChange.emit({ couponCode: coupon.couponCode, amount: parseFloat((coupon.amount).toFixed(1)) });
  }
  ngOnDestory() {
    this.subscribe.unsubscribe();
  }
}
