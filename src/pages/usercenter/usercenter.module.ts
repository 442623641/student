import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsercenterPage } from './usercenter';
import { FeedbackPageModule } from '../feedback/feedback.module';
import { SetupPageModule } from '../setup/setup.module';
import { PersonalPageModule } from '../personal/personal.module';
import { PasswordPageModule } from '../password/password.module';

import { TradePageModule } from '../trade/trade.module';
import { CouponPageModule } from '../coupon/coupon.module';
import { RechargePageModule } from '../recharge/recharge.module';
import { ValidationPageModule } from '../validation/validation.module';

import { ComponentsModule } from '../../components';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [
    UsercenterPage,
  ],
  imports: [
    IonicPageModule.forChild(UsercenterPage),
    FeedbackPageModule,
    SetupPageModule,
    PersonalPageModule,
    PasswordPageModule,
    TradePageModule,
    CouponPageModule,
    RechargePageModule,
    ValidationPageModule,
    ComponentsModule,
    DirectivesModule,
  ],
  exports: [
    ComponentsModule
  ]
})
export class UsercenterPageModule {}
