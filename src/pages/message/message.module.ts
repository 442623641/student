import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import { MessageProvider } from '../../providers/message/message';
@NgModule({
  declarations: [
     MessagePage
  ],
  imports: [
    IonicPageModule.forChild(MessagePage)
  ],
  providers: [
    MessageProvider
  ]
})
export class MessagePageModule {}
