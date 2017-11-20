import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CouponProvider } from '../../providers/coupon/coupon';
import { NativeProvider } from '../../providers/native';
import { CouPon } from '../../model/coupon';
@IonicPage()
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {
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
    this.view = this.navParams.get('params') || { viewindex: 1, viewlength: 10 };
  }
  ngAfterViewInit() {
    this.initialize();

  }

  /**
   *获取优惠券列表
   */
  initialize() {
    //是否需要加载列表数据
    this.coupons = this.navParams.get('coupons') || [];
    this.checked = this.navParams.get('checked');
    this.showButton = !!this.coupons.length;
    this.showButton || (this.setChecked = () => {});
    if (this.coupons.length) return;

    this.couponpro.getlist(this.view).then(res => {
      console.log(res, 'the list');
      if (!res || !res.list || !res.list.length) {
        this.coupons = null;
        return;
      }
      this.coupons = res.list;
    }).catch(e => {
      this.coupons = null;
      console.log(e);
    })
  }

  /**
   *根据优惠券编码获取优惠券
   */
  search() {
    // 判断用户添加的是否是已经用过的优惠券
    this.coupons.forEach((v, i) => {
      if (this.codes === v.couponCode) {
        this.nativePro.toast('该优惠券已存在');
        this.values = v.couponCode;
      }
    });

    if (typeof this.values === 'string') {
      return false;
    }
    //不是则判断优惠券是否合法 合法则添加 不合法报错
    this.couponpro.wincoupon({ code: this.codes }).then(res => {
      console.log(typeof res);
      if (typeof res === 'string') {
        this.nativePro.toast(res);
      } else {
        this.coupons.unshift(res);
      }
    }).catch(err => {
      if (err) {
        this.nativePro.toast('无效的优惠码');
      }
    })
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
    this.couponpro.checked(this.coupons.find(item => {
     return item.couponCode == this.checked ;
   }));
    this.navCtrl.pop();
  }
}
