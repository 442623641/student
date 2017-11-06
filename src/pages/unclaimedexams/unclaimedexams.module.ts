import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnclaimedexamsPage } from './unclaimedexams';
import { MessageProvider } from '../../providers/message/message';
@NgModule({
  declarations: [
    UnclaimedexamsPage,
  ],
  imports: [
    IonicPageModule.forChild(UnclaimedexamsPage),
  ],
  providers: [
    MessageProvider
  ]
})
export class UnclaimedexamsPageModule {}
