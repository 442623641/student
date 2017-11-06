import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageInfoPage } from './messageinfo';
import { MessageProvider } from '../../providers/message/message';
@NgModule({
  declarations: [
    MessageInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageInfoPage),
  ],
  providers: [
    MessageProvider
  ]
})
export class MessageInfoPageModule {}
