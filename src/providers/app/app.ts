import { HttpProvider } from "../http";
import { Injectable } from '@angular/core';
import { Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeProvider } from '../native';
import { UpgradeProvider } from './upgrade';
import { HardbackProvider } from './hardback';
import { MobclickagentProvider } from './mobclickagent';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {
  constructor(
    public http: HttpProvider,
    private nativePro: NativeProvider,
    private upgradePro: UpgradeProvider,
    private statusBar: StatusBar,
    private analyticsPro: MobclickagentProvider,
    private hardbackPro: HardbackProvider,
    private config: Config
  ) {
    console.log('Hello AppProvider Provider');
  }

  initiliaze() {
    //友盟统计配置/android
    let analyticsConfig = {
      appkey: '5a3210f3f43e48252a000274',
      channel: 'septnet'
    }

    //statusBar style
    this.statusBar.styleLightContent();
    if (this.nativePro.isAndroid()) {
      this.statusBar.backgroundColorByHexString("#f66e4f");
      //安卓硬件返回功能
      this.hardbackPro.registerBackButtonAction();

      //键盘弹出
      this.config.set('android', 'scrollPadding', false);
      this.config.set('android', 'scrollAssist', true);
      this.config.set('android', 'autoFocusAssist', false);
    } else if (this.nativePro.isIos()) {
      //ios
      analyticsConfig = {
        appkey: '5a355e1b8f4a9d4558000c93',
        channel: 'App Store'
      }
    }
    //友盟统计配置
    this.analyticsPro.config(analyticsConfig);

    //获取设置版本号
    return this.nativePro.version().then(version => {

      console.log(`The ${version} version of the【小七助手】is ready`);
      this.http.setVersion(version);
      //检查更新
      setTimeout(() => this.upgradePro.checkUpdate(version), 3000);
    })
  }

  /*
   *反馈消息
   */
  feedback(data, path ? ) {
    return path ? this.http.uploadFile('index/feedback', data, path) : this.http.post('index/feedback', data);
  }
}
