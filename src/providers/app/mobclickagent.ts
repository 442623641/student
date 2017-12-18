import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
/* beautify ignore:start */
declare let MobclickAgent: any;
/* beautify ignore:end */
/*
  Generated class for the AnalyticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MobclickagentProvider {
  debugMode: boolean;
  native: boolean;
  events: any[] = [];
  constructor(platform: Platform) {
    console.log('Hello AnalyticsProvider Provider');
    this.native = platform.is('mobile') && !platform.is('mobileweb')
  }
  config(config ? , debugMode ? ) {
    this.debugMode = debugMode;
    if (!this.native) {
      this.webMobclickAgent();
    } else {
      MobclickAgent.init(config.appkey, config.channel);
      this.nativeMobclickAgent();
    }

  }

  /**
   * 自定义事件数量统计
   *
   * @param eventId
   *            string类型.事件ID，注意需要先在友盟网站注册此ID
   */
  onEvent: Function;
  /**
   * 自定义事件数量统计
   *
   * @param eventId
   *            NSString类型.事件ID， 注意需要先在友盟网站注册此ID
   * @param eventLabel
   *            NSString类型.事件标签，事件的一个属性说明
   */
  onEventWithLabel: Function;
  /**
   * 自定义事件数量统计
   *
   * @param eventId
   *            NSString类型.事件ID， 注意需要先在友盟网站注册此ID
   * @param eventData
   *            NSDictionary类型.当前事件的属性集合，最多支持10个K-V值
   */
  onEventWithParameters: Function;
  /**
   * 统计帐号登录接口 *
   *
   * @param UID
   *            用户账号ID,长度小于64字节
   */
  profileSignInWithPUID: Function;
  /**
   * 帐号统计退出接口
   */
  profileSignOff: Function;
  /**
   * 页面统计开始时调用
   *
   * @param pageName
   *            NSString类型.页面名称
   */
  onPageBegin: Function = (e) => {};
  /**
   * 页面统计结束时调用
   *
   * @param pageName
   *            NSString类型.页面名称
   */
  onPageEnd: Function;

  /**
   * 真机环境
   */
  nativeMobclickAgent() {

    this.onEvent = MobclickAgent.onEvent;

    this.onEventWithParameters = MobclickAgent.onEventWithParameters;

    this.profileSignInWithPUID = MobclickAgent.profileSignInWithPUID;

    this.profileSignOff = MobclickAgent.profileSignOff;

    this.onPageBegin = MobclickAgent.onPageBegin;

    this.onPageEnd = MobclickAgent.onPageBegin;
    console.log('cordova mobclickAgent loaded success');
  }
  /**
   * 非真机环境
   */
  webMobclickAgent() {
    this.onEvent = eventId => {
      if (!eventId) return console.warn('You have a touch event without event name');
      this.events.indexOf(eventId) == -1 && this.events.push(eventId);
      console.log('event ' + eventId);
      eventId == 'eventsOut' && console.log('all events:', JSON.stringify(this.events.sort()));
    }
    this.onEventWithParameters = (eventId, eventData) => {
      console.log('onEventWithParameters', JSON.stringify([eventId, eventData]));
    }
    this.profileSignInWithPUID = (UID) => {
      console.log('profileSignInWithPUID', JSON.stringify([UID]));
    }
    this.profileSignOff = () => {
      console.log('profileSignOff');
    }
    this.onPageBegin = (pageName) => {
      console.log('onPageBegin', JSON.stringify([pageName]));
    }
    this.onPageEnd = (pageName) => {
      console.log('onPageEnd', JSON.stringify([pageName]));
    }
    console.log('web mobclickAgent loaded success');
  }
}
