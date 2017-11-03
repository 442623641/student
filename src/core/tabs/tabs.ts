import { Component } from '@angular/core';

import { HomePage } from '../../pages/home/home';
import { TabsProvider } from '../../providers/tabs/tabs';
import { NewsPage } from '../../pages/news/news';
import { UsercenterPage } from '../../pages/usercenter/usercenter';

import { NEWS_PAGE, USERCENTER_PAGE, HOME_PAGE } from '../../pages/pages.constants';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NEWS_PAGE;
  tab3Root = USERCENTER_PAGE;
  private msgCount: number = 0;

  constructor(private tabProvider: TabsProvider) {}
  ngOnInit() {
    this.tabProvider.$badge.subscribe(count => this.msgCount = count);

  }
}
