import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownlinkPage } from './downlink';
@NgModule({
  declarations: [
    DownlinkPage,
  ],
  imports: [
    IonicPageModule.forChild(DownlinkPage),
  ],
})
export class DownlinkPageModule {}
