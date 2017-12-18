import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagePage } from './package';
import { CouponComponentModule } from '../../components/coupon/coupon.module';
import { PaymentComponentModule } from '../../components/payment/payment.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    PackagePage,
  ],
  imports: [
    IonicPageModule.forChild(PackagePage),
    CouponComponentModule,
    PaymentComponentModule,
    ComponentsModule,
    DirectivesModule,
  ],
})
export class PackagePageModule {}
