import { Component, NgZone } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PAYMENT_PAGE, COUPON_PAGE } from '../pages.constants';
// /import { PackageguidePage } from '../packageguide/packageguide';
import { PaymentOption } from '../../model/payment';
import { PackageOption, PackageO, PACKAGEOPTIONS } from '../../model/package';
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
  amount: number;
  pages: any = { payment: PAYMENT_PAGE, coupon: COUPON_PAGE };
  paymentOption: PaymentOption = { ordertype: 'package' };
  package: PackageO;
  options: PackageOption[] = PACKAGEOPTIONS;

  constructor(
    private packagePro: PackageProvider,
    private ngZone: NgZone
  ) {}
  balanceChange(event) {
    this.package = new PackageO(event, this.options[0]);
    //this.setParams(this.package);
  }
  ionViewDidLoad() {
    //setTimeout(() => {
    this.packagePro.options().then(res => {
      if (!res || !res.length) return this.options = null;
      this.options = res;
      this.tap(res[0]);
    }).catch(ex => {
      this.options = null;
    });
    //}, 350);
  }

  tap(opt: PackageOption) {
    if (opt.value == this.package.option.value) return;
    this.package.setPackage(opt);
    //this.setParams(this.package);
  }

  couponChange(event) {
    setTimeout(() => {
      this.package.setCoupon(event);
      this.setParams(this.package);
      //console.log(event);
    }, 60);
  }

  setParams(obj: PackageO) {
    if (this.paymentOption.amount == obj.amount && this.paymentOption.year == obj.option.year) return;

    this.ngZone.run(() => {
      this.paymentOption = { ordertype: 'package', year: obj.option.year, amount: obj.amount }
    })

    if (obj.coupon) this.paymentOption.couponcode = obj.coupon;
    //console.log(this.paymentOption);

  }

}
