import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { MessageProvider } from '../../providers/message/message';
@NgModule({
  declarations: [
    NewsPage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  providers: [
    MessageProvider
  ]
})
export class NewsPageModule {}
