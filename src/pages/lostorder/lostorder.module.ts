import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostorderPage } from './lostorder';
//import { lostorderProvider } from '../../providers/lostorder/lostorder';

@NgModule({
  declarations: [
    LostorderPage,
  ],
  imports: [
    IonicPageModule.forChild(LostorderPage),
  ],
  // providers: [
    //   //lostorderProvider,
    // ]

})
export class LostorderPageModule {}
