import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { UpgradeProvider } from '../../providers/app/upgrade';
import { ABOUTUS_PAGE } from '../pages.constants';
import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {
  pages: any = {
    aboutus: ABOUTUS_PAGE

  };
  remoteVersion: string;
  localVersion: string;
  constructor(
    private userProvider: UserProvider,
    private upgradePro: UpgradeProvider,
    private nativePro: NativeProvider
  ) {
    this.remoteVersion = upgradePro.remoteVersion;
    this.localVersion = upgradePro.localVersion;
  }
  
  logout() {
    this.userProvider.logout();
  }
  checkUpdate() {
    this.upgradePro.checkUpdate().then(res => {
      res || this.nativePro.toast('已经是最新版本');
    })
  }

}
