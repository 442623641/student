import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import { NotifyProvider } from '../../providers/notify/notify';
import { SYSMESSAGE_PAGE } from '../pages.constants';
import { Pageview } from '../../model/pageview';
@IonicPage()
@Component({
  selector: 'page-sysmessages',
  templateUrl: 'sysmessages.html'
})
export class SysmessagesPage {
  view: Pageview;
  messages: any[];
  end: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private messagePro: MessageProvider,
    private notifyPro: NotifyProvider
  ) {}

  ionViewDidLoad() {
    this.doRefresh();
  };

  doRefresh(event ? ) {
    let exception = (res) => {
      event && event.complete();
      this.messages = null;
    }
    this.view = new Pageview({ viewindex: 1, viewlength: 10 });
    this.messagePro.message(this.view).then(res => {
      if (!res || !res.length) return exception(res);
      this.messages = res;
      event && event.complete();
    }).catch(ex => exception(ex))
  }

  message(msg) {
    msg.state = 1;
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
      if (!res || !res.length) return this.end = true;
      this.messages = this.messages.concat(res);

    }).catch(ex => event.complete());
  }



}
