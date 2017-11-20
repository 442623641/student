import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechargePage } from './recharge';
import { PaymentPageModule } from '../payment/payment.module';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    RechargePage,
  ],
  imports: [
    IonicPageModule.forChild(RechargePage),
    PaymentPageModule,
    ComponentsModule,
  ],
})
export class RechargePageModule {}
