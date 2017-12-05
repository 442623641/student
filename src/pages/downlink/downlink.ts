import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeProvider } from '../../providers/native';
import { LostProvider } from '../../providers/lost/lost';
import { ELOSTUSAGE_PAGE } from '../pages.constants';
import { Clipboard } from '@ionic-native/clipboard';
/* beautify ignore:start */
//declare let Wechat: any;
/* beautify ignore:end */
/**
 * Generated class for the DownlinkPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downlink',
  templateUrl: 'downlink.html',
})
export class DownlinkPage {
  pages = { guide: ELOSTUSAGE_PAGE, }
  order: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
    public clipboard: Clipboard,
    private nativePro: NativeProvider
  ) {
    this.order = this.navParams.get('order');
  }
  openShare() {
    let str = this.order.url + '  提取码：' + this.order.code;
    this.clipboard.copy(str).then(res => this.nativePro.toast("\n  复制成功，快去粘贴下载吧  \n", 2500, 'center'));
  }

}
