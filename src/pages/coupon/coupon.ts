import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CouponProvider } from '../../providers/coupon/coupon';
import { NativeProvider } from '../../providers/native';
import { CouPon } from '../../model/coupon';
import { Pageview } from '../../model/pageview';
@IonicPage()
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {
  //pageview: Pageview;
  total: number;
  view: CouPon;
  coupons: any[];
  codes: string;
  values: any;
  /**
   *选中优惠劵编号
   */
  checked: string;

  /**
   *是否显示确定按钮
   */
  showButton: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private couponpro: CouponProvider,
    private nativePro: NativeProvider,
  ) {
    this.view = this.navParams.get('params');
  }
  ionViewDidLoad() {
    //是否需要加载列表数据
    this.checked = this.navParams.get('checked');
    this.coupons = this.navParams.get('coupons');
    if (!this.coupons) {
      setTimeout(() => {
        this.doRefresh()
      }, 450);
      this.setChecked = () => {}
    } else {
      this.showButton = true;
      this.coupons.length || (this.coupons = null);
    }
  }

  /**
   *获取优惠券列表
   */
  doRefresh(event ? ) {
    this.view = Object.assign(new Pageview({ viewindex: 1, viewlength: 10 }), this.view, { isexpired: 0 });
    this.couponpro.getlist(this.view).then(res => {
      event && event.complete();
      if (!res || !res.list || !res.list.length) return this.coupons = null;
      this.total = res.count;
      this.coupons = res.list;
    }).catch(e => {
      event && event.complete();
      this.coupons = null;
      console.log(e);
    })
  }

  doInfinite(event ? ) {
    this.view.viewindex++;
    this.couponpro.getlist(this.view).then(res => {
      if (!res || !res.list || !res.list.length) event.complete();
      this.coupons = this.coupons.concat(res.list);
    }).catch(e => {
      console.log(e);
      event.complete();
    })
  }

  /**
   *根据优惠券编码获取优惠券
   */
  search() {
    if (!this.codes) return;
    // 判断用户添加的是否是已经用过的优惠券
    this.coupons && this.coupons.length && this.coupons.forEach((v, i) => {
      if (this.codes === v.couponCode) {
        this.nativePro.toast('该优惠券已存在');
        this.values = v.couponCode;
        this.codes = '';
      }
    });

    //不是则判断优惠券是否合法 合法则添加 不合法报错
    this.couponpro.wincoupon({ code: this.codes }).then(res => {
        res && res.couponCode ? (this.coupons.unshift(res), this.codes = '') : this.nativePro.toast('该优惠劵不存在');
      })
      .catch(err => this.nativePro.toast('该优惠劵不存在'));
  }

  /**
   *选中优惠劵
   */
  setChecked(code: string) {
    this.checked = this.checked == code ? '' : code;
  }

  /**
   *保存选中
   */
  save() {
    this.couponpro.checked(this.coupons ? this.coupons.find(item => {
      return item.couponCode == this.checked;
    }) : null);
    this.navCtrl.pop();
  }
}
