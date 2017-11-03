import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostPage } from './lost';
// import { LostProvider } from '../../providers/lost/lost';
import { LostoptionPageModule } from '../lostoption/lostoption.module';
import { LostpayPageModule } from '../lostpay/lostpay.module';
import { LostorderPageModule } from '../lostorder/lostorder.module';
import { ComponentsModule } from '../../components';
@NgModule({
  declarations: [
    LostPage,
  ],
  imports: [
    IonicPageModule.forChild(LostPage),
    LostoptionPageModule,
    LostorderPageModule,
    LostpayPageModule,
    ComponentsModule,
  ],
})
export class LostPageModule {}
