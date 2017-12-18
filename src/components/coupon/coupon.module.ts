import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { CouponComponent } from './coupon';

@NgModule({
  declarations: [
    CouponComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CouponComponent,
  ],
})
export class CouponComponentModule {}
