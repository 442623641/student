import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { ClaimPageModule } from '../claim/claim.module'
import { SysmessagesPageModule } from '../sysmessages/sysmessages.module'
import { MessageProvider } from '../../providers/message/message';
@NgModule({
  declarations: [
    NewsPage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    ClaimPageModule,
    SysmessagesPageModule
  ],
  providers: [
    MessageProvider
  ]
})
export class NewsPageModule {}
