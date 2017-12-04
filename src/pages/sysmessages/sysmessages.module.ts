import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SysmessagesPage } from './sysmessages';
// import { SysmessagePageModule } from '../sysmessage/sysmessage.module';
import { ComponentsModule } from '../../components/components.module';
// import { MessageProvider } from '../../providers/message/message';

@NgModule({
  declarations: [
    SysmessagesPage
  ],
  imports: [
    IonicPageModule.forChild(SysmessagesPage),
    // SysmessagePageModule,
    ComponentsModule
  ],
  // providers: [
  //   MessageProvider
  // ]
})
export class SysmessagesPageModule {}
