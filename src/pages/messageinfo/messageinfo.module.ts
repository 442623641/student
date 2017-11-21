import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageInfoPage } from './messageinfo';
@NgModule({
  declarations: [
    MessageInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageInfoPage),
  ]
})
export class MessageInfoPageModule {}
