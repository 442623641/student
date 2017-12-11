import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NotifyProvider } from '../../providers/notify/notify';
import { NEWS_PAGE, USERCENTER_PAGE, HOME_PAGE } from '../../pages/pages.constants';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HOME_PAGE;
  tab2Root = NEWS_PAGE;
  tab3Root = USERCENTER_PAGE;
  msgCount: number = 0;

  constructor(notifyPro: NotifyProvider) {
    notifyPro.statistics().catch(ex => { console.log(ex) });
    notifyPro.count$.subscribe(res => this.msgCount = res);
  }

}
