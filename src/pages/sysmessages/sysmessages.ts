import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import { NotifyProvider } from '../../providers/notify/notify';
import { SYSMESSAGE_PAGE } from '../pages.constants';
import { Pageview } from '../../model/pageview';
import { BrowserProvider } from '../../providers/browser/browser';

@IonicPage()
@Component({
  selector: 'page-sysmessages',
  templateUrl: 'sysmessages.html'
})
export class SysmessagesPage {
  view: Pageview;
  messages: any[];
  total: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private messagePro: MessageProvider,
    private notifyPro: NotifyProvider,
    private browserPro: BrowserProvider
  ) {}

  ionViewDidLoad() {
    setTimeout(() => this.doRefresh(), 350);
  }

  doRefresh(event ? ) {
    //this.browserPro.start();
    let exception = (res) => {
      event && event.complete();
      this.messages = null;
    }
    this.view = new Pageview({ viewindex: 1, viewlength: 10 });
    this.messagePro.message(this.view).then(res => {
      if (!res || !res.list || !res.list.length) return exception(res);
      this.messages = res.list;
      event && event.complete();
    }).catch(ex => exception(ex))
  }

  message(msg) {
    msg.state = 1;
    if (msg.linkaddress) {
      return this.browserPro.start({ url: msg.linkaddress, title: msg.title });
    }
    this.navCtrl.push(SYSMESSAGE_PAGE, { guid: msg.guid });
    this.notifyPro.add('unread', -1);
  }

  /**
   *
   */
  doInfinite(event) {
    this.view.viewindex++;
    this.messagePro.message(this.view).then(res => {
      event.complete();
      this.messages = this.messages.concat(res);
    }).catch(ex => event.complete());
  }

}
