import { Injectable } from '@angular/core';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { NativeProvider } from '../native';

/*
  Generated class for the BrowserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BrowserProvider {
  loadstopSubscribe: any;
  loadfailSubscribe: any;
  shareSubscribe: any;

  constructor(public themeableBrowser: ThemeableBrowser, private nativePro: NativeProvider) {
    console.log('Hello BrowserProvider Provider');
  }

  start(obj: any) {

    const options: ThemeableBrowserOptions = {
      //hidden: 'yes',
      statusbar: {
        color: '#f66e4f'
      },
      // clearcache: 'yes',
      // clearsessioncache: 'yes',
      //hidden: 'yes',
      toolbar: {
        height: 44,
        color: '#f66e4f',
      },
      title: {
        color: '#ffffff',
        showPageTitle: true,
        staticText: obj.title
      },
      backButton: {
        // wwwImage: 'assets/images/close.png',
        // wwwImagePressed: 'assets/images/close.png',
        align: 'left',
        //wwwImageDensity: 3
      },


      // forwardButton: {
      //   image: 'forward',
      //   imagePressed: 'forward_pressed',
      //   align: 'left',
      //   event: 'forwardPressed'
      // },
      closeButton: {
        wwwImage: 'assets/images/close.png',
        wwwImagePressed: 'assets/images/close.png',
        align: 'left',
        wwwImageDensity: 4
        //event: 'closePressed'
      },

      customButtons: [{
        wwwImage: 'assets/images/share.png',
        wwwImagePressed: 'assets/images/share.png',
        align: 'right',
        wwwImageDensity: 3,
        event: 'sharePressed'
      }],
      //hidden: 'yes',
      // menu: {
      //   image: 'menu',
      //   imagePressed: 'menu_pressed',
      //   title: 'Test',
      //   cancel: 'Cancel',
      //   align: 'right',
      //   items: [{
      //       event: 'helloPressed',
      //       label: 'Hello World!'
      //     },
      //     {
      //       event: 'testPressed',
      //       label: 'Test!'
      //     }
      //   ]
      // },

      backButtonCanClose: true
    };

    const browser: ThemeableBrowserObject = this.themeableBrowser.create(obj.url, '_blank', options);
    //this.nativePro.showLoading();
    //browser.hide();
    //browser.on('loadfail')
    this.shareSubscribe && this.shareSubscribe.unsubscribe();
    this.loadfailSubscribe && this.loadfailSubscribe.unsubscribe();
    this.loadstopSubscribe && this.loadstopSubscribe.unsubscribe();
    this.loadstopSubscribe = browser.on('loadstop').subscribe(event => {
      this.loadstopSubscribe.unsubscribe();
      //this.nativePro.hideLoading();
      //setTimeout(() => browser.show(), 500);
    });
    this.loadfailSubscribe = browser.on('loadfail').subscribe(event => {
      this.loadfailSubscribe.unsubscribe();
      //this.nativePro.hideLoading();
      this.nativePro.toast('网络异常，请稍后再试');
      //setTimeout(() => browser.show(), 500);
    });
    this.shareSubscribe = browser.on('sharePressed').subscribe(event => {
      this.nativePro.share(obj.url, obj.title)
    });
  }
}
