import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechargePage } from './recharge';
//import { PaymentPageModule } from '../payment/payment.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    RechargePage,
  ],
  imports: [
    IonicPageModule.forChild(RechargePage),
    //PaymentPageModule,
    ComponentsModule,
    DirectivesModule,
  ],
})
export class RechargePageModule {}
