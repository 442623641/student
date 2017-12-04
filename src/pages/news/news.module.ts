import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
// import { ClaimPageModule } from '../claim/claim.module'
// import { SysmessagesPageModule } from '../sysmessages/sysmessages.module'
@NgModule({
  declarations: [
    NewsPage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    // ClaimPageModule,
    // SysmessagesPageModule
  ],
})
export class NewsPageModule {}
