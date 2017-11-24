import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PAYMENT_PAGE, COUPON_PAGE } from '../pages.constants';
//import { UserProvider } from '../../providers/user';
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
  package: PackageO;
  options: PackageOption[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public packagePro: PackageProvider,
    public nativePro: NativeProvider,

  ) {}
  balanceChange(event) {
    this.package = new PackageO(event);
  }
  ngAfterViewInit() {
    this.packagePro.options().then(res => {
      if (!res || !res.length) return;
      this.options = res;
      this.tap(this.options[0]);
    });
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

}
