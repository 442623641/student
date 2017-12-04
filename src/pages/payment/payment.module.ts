import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';
//mport { PaymentProvider } from '../../providers/payment/payment';
import { AgreementPageModule } from '../agreement/agreement.module';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    PaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentPage),
    AgreementPageModule,
    ComponentsModule,
  ],
  // providers: [
  //   PaymentProvider,

  // ]
})
export class PaymentPageModule {}
