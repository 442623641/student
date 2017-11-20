import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostpayPage } from './lostpay';
import { ComponentsModule } from '../../components/components.module';
//import { lostpayProvider } from '../../providers/lostpay/lostpay';

@NgModule({
  declarations: [
    LostpayPage,
  ],
  imports: [
    IonicPageModule.forChild(LostpayPage),
    ComponentsModule,
  ],
  // providers:[
  // 	lostpayProvider,
  // ]
})
export class LostpayPageModule {}
