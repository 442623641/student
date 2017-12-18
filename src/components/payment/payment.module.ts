import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PaymentComponent } from './payment';
import { ComponentsModule } from '../components.module';
import { DirectivesModule } from '../../directives/directives.module';
//import { CurrencyComponentModule } from '../currency/currency.module';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    DirectivesModule,
    //CurrencyComponentModule,
  ],
  exports: [
    PaymentComponent,
  ],
})
export class PaymentComponentModule {}
