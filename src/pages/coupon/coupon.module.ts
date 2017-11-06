import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouponPage } from './coupon';
import { CouponProvider } from '../../providers/coupon/coupon';
@NgModule({
  declarations: [
    CouponPage,
  ],
  imports: [
    IonicPageModule.forChild(CouponPage),
  ],
  providers: [
    CouponProvider
  ]
})
export class CouponPageModule {}
