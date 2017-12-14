import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
/* beautify ignore:start */
declare let Umeng: any;
/* beautify ignore:end */
/*
  Generated class for the AnalyticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnalyticsProvider {
  native: boolean;
  constructor(platform: Platform) {
    console.log('Hello AnalyticsProvider Provider');
    this.native = platform.is('mobile') && !platform.is('mobileweb')
  }
  config(config ? ) {
    if (!this.native) return;
    Umeng.Analytics.config(config, () => console.log("友盟API初始化成功"), (reason) => console.log("友盟API初始化失败"));
  }
  pageEnter(page: string) {
    if (!this.native) return console.log(page + ' enter');
    Umeng.Analytics.startPage(page, () => { console.log(page + ' enter') }, () => { console.log(page + ' enter fail') });
  }

  pageLeave(page: string) {
    if (!this.native) return console.log(page + ' leave');
    Umeng.Analytics.endPage(page, () => { console.log(page + ' leave') }, () => { console.log(page + ' leave fail') });
  }
  event(eventNames) {
    if (!this.native) return console.log(eventNames + ' event');
    Umeng.Analytics.logEvent({
        eventId: eventNames,
      }, () => console.log(eventNames + ' event sucess'),
      ex => console.log(eventNames + ' event failed,reason:' + ex));
  }

}
