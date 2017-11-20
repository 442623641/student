import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PAYMENT_PAGE, COUPON_PAGE } from '../pages.constants';
import { UserProvider } from '../../providers/user';
import { NativeProvider } from '../../providers/native';
import { PaymentOption } from '../../model/payment';
import { PackageOption, PackageO } from '../../model/package';
import { PackageProvider } from '../../providers/package/package';
/**
 * Generated class for the PackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-package',
  templateUrl: 'package.html',
})
export class PackagePage {
  pages: any = { payment: PAYMENT_PAGE, coupon: COUPON_PAGE };
  paymentOption: PaymentOption;
  //checked: PackageOption = { name: '一年学情套餐', value: 1000, year: 1 };
  package: PackageO;
  //code: string;
  //amount: number = 0;
  //dvalue: number = 0;
  //balance: number = 0;
  options: PackageOption[];
  //cheap: number = 0;
  //payParams: PaymentOption;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userPro: UserProvider,
    public packagePro: PackageProvider,
    public nativePro: NativeProvider,

  ) {}

  ngAfterViewInit() {
    this.userPro.getUserInfo().then(res => this.package = new PackageO(res.coin));
    this.packagePro.options().then(res => {
      if (!res || !res.length) return;
      this.options = res;
      this.tap(this.options[0]);
    });

    console.log(this.navCtrl.getActiveChildNavs());
    console.log(this.navCtrl.getAllChildNavs());
  }

  tap(opt: PackageOption) {
    this.package.setPackage(opt);
    this.setParams(this.package);

  }


  couponChange(event) {
    this.package.setCoupon(event);
    this.setParams(this.package);
  }

  setParams(obj: PackageO) {
    this.paymentOption = { ordertype: 'package', year: obj.option.year, amount: obj.amount }
    if (obj.coupon) this.paymentOption.couponcode = obj.coupon;
  }

  complete(event) {
    console.log(event);
    this.nativePro.toast("你已经成功开通" + this.package.option.name);
    setTimeout(() => this.navCtrl.pop(), 500);
  }

}
