import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElostpayPage } from './elostpay';

import { CouponComponentModule } from '../../components/coupon/coupon.module';
import { PaymentComponentModule } from '../../components/payment/payment.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ElostpayPage,
  ],
  imports: [
    IonicPageModule.forChild(ElostpayPage),
    PaymentComponentModule,
    CouponComponentModule,
    ComponentsModule,
    DirectivesModule,
  ],
})
export class LostpayPageModule {}
