import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElostpayPage } from './elostpay';
import { ComponentsModule } from '../../components/components.module';
//import { lostpayProvider } from '../../providers/lostpay/lostpay';

@NgModule({
  declarations: [
    ElostpayPage,
  ],
  imports: [
    IonicPageModule.forChild(ElostpayPage),
    ComponentsModule,
  ],
  // providers:[
  // 	lostpayProvider,
  // ]
})
export class LostpayPageModule {}
