import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouponPage } from './coupon';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    CouponPage,
  ],
  imports: [
    IonicPageModule.forChild(CouponPage),
    ComponentsModule,
    DirectivesModule
  ]
})
export class CouponPageModule {}
