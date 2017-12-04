import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SYSMESSAGES_PAGE, CLAIM_PAGE } from '../pages.constants';
// import { MessageProvider } from '../../providers/message/message';
import { NotifyProvider } from '../../providers/notify/notify';
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  pages: any = {
    smessage: SYSMESSAGES_PAGE,
    claim: CLAIM_PAGE
  };
  news: NewsOption = { systemcount: 0, unclaimed: 0, unread: 0 };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private notifyPro: NotifyProvider
  ) {
    this.news = this.notifyPro.distribution;
  }

  doRefresh(event ? ) {
    this.notifyPro.statistics().then(res => {
      console.log(res);
      this.news = res || this.news;
      event && event.complete();
    }).catch(ex => event && event.complete());
  }
}

interface NewsOption {
  systemcount: number;
  unread: number;
  unclaimed: number;
}
