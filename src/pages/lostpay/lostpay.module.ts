import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostpayPage } from './lostpay';
import { PaymentComponentModule } from '../../components/payment/payment.module';
import { CouponComponentModule } from '../../components/coupon/coupon.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    LostpayPage,
  ],
  imports: [
    IonicPageModule.forChild(LostpayPage),
    CouponComponentModule,
    ComponentsModule,
    DirectivesModule,
    PaymentComponentModule,
  ],
})
export class LostpayPageModule {}
