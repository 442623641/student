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

  /**
   * 自定义事件数量统计
   *
   * @param eventId
   *            string类型.事件ID，注意需要先在友盟网站注册此ID
   */
  onEvent(eventId: string) {};
  /**
   * 自定义事件数量统计
   *
   * @param eventId
   *            NSString类型.事件ID， 注意需要先在友盟网站注册此ID
   * @param eventLabel
   *            NSString类型.事件标签，事件的一个属性说明
   */
  //onEventWithLabel(eventId: string, eventLabel: string){};
  /**
   * 自定义事件数量统计
   *
   * @param eventId
   *            NSString类型.事件ID， 注意需要先在友盟网站注册此ID
   * @param eventData
   *            NSDictionary类型.当前事件的属性集合，最多支持10个K-V值
   */
  onEventWithParameters(eventId: string, eventData: any[]) {};
  /**
   * 统计帐号登录接口 *
   *
   * @param UID
   *            用户账号ID,长度小于64字节
   */
  profileSignInWithPUID(UID: string) {};
  /**
   * 帐号统计退出接口
   */
  profileSignOff() {};
  /**
   * 页面统计开始时调用
   *
   * @param pageName
   *            NSString类型.页面名称
   */
  onPageBegin(pageName: string) {};
  /**
   * 页面统计结束时调用
   *
   * @param pageName
   *            NSString类型.页面名称
   */
  onPageEnd(pageName: string) {};

  /**
   * 真实消费（充值）的时候调用此方法 1.AppStore 2.支付宝 3.网银 4.财付通 5.移动 6.联通 7.电信 8.paypal
   *
   * @param money
   *            double类型.本次消费金额
   * @param coin
   *            double类型.本次消费等值的虚拟币
   * @param source
   *            int类型.本次消费的途径，网银，支付宝 等
   */

  pay(money: number, coin: number, source: number) {};
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
   * 真机环境
   */
  nativeMobclickAgent() {

    this.onEvent = MobclickAgent.onEvent;

    this.onEventWithParameters = MobclickAgent.onEventWithParameters;

    this.profileSignInWithPUID = MobclickAgent.profileSignInWithPUID;

    this.profileSignOff = MobclickAgent.profileSignOff;

    this.onPageBegin = MobclickAgent.onPageBegin;

    this.onPageEnd = MobclickAgent.onPageEnd;
    this.pay = MobclickAgent.pay;
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
    this.pay = (money, coin, source) => {
      console.log(source + ' pay', 'money:' + money + ',coin:' + coin);
    }
    console.log('web mobclickAgent loaded success');
  }
}
