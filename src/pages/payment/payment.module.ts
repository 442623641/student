import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { AgreecheckComponentModule } from '../../components/agreecheck/agreecheck.module';
@NgModule({
  declarations: [
    PaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentPage),
    ComponentsModule,
    DirectivesModule,
    AgreecheckComponentModule,
  ],
})
export class PaymentPageModule {}
