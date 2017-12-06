import { Component } from '@angular/core';

import { HomePage } from '../../pages/home/home';
import { NotifyProvider } from '../../providers/notify/notify';
// import { NewsPage } from '../../pages/news/news';
// import { UsercenterPage } from '../../pages/usercenter/usercenter';

import { NEWS_PAGE, USERCENTER_PAGE } from '../../pages/pages.constants';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NEWS_PAGE;
  tab3Root = USERCENTER_PAGE;
  msgCount: number = 0;

  constructor(notifyPro: NotifyProvider) {
    notifyPro.statistics().catch(ex => { console.log(ex) });
    notifyPro.count$.subscribe(res => this.msgCount = res);
  }

}
