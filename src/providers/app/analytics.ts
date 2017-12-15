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
  debugMode: boolean;
  native: boolean;
  events: any[] = [];
  constructor(platform: Platform) {
    console.log('Hello AnalyticsProvider Provider');
    this.native = platform.is('mobile') && !platform.is('mobileweb')
  }
  config(config ? , debugMode ? ) {
    this.debugMode = debugMode;
    if (!this.native) return;
    Umeng.Analytics.config(config, () => console.log("友盟API初始化成功"), (reason) => console.log("友盟API初始化失败"));
  }

  pageEnter(page: string) {
    if (!this.native) return console.log('page ' + page + ' enter');
    Umeng.Analytics.startPage(page, () => { console.log(page + ' enter') }, () => { console.log(page + ' enter fail') });
  }

  pageLeave(page: string) {
    if (!this.native) return console.log('page ' + page + ' leave');
    Umeng.Analytics.endPage(page, () => { console.log('page ' + page + ' leave') }, () => { console.log('page ' + page + ' leave fail') });
  }
  event(eventName) {
    if (!this.native) return this.push(eventName);
    Umeng.Analytics.logEvent({
        eventId: eventName,
      }, () => console.log(eventName + ' event sucess'),
      ex => console.log(eventName + ' event failed,reason:' + ex));
  }

  push(eventName) {
    this.events.indexOf(eventName) == -1 && this.events.push(eventName);
    console.log('event ' + eventName);
    eventName == 'eventsOut' && console.log('all events:', JSON.stringify(this.events.sort()));
  }





}
