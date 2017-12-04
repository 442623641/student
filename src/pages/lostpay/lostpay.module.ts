import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostpayPage } from './lostpay';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    LostpayPage,
  ],
  imports: [
    IonicPageModule.forChild(LostpayPage),
    ComponentsModule,
  ],
})
export class LostpayPageModule {}
